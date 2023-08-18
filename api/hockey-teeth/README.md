# Hockey Teeth API
[api.hockeyteethband.com](https://api.hockeyteethband.com)

## Overview
This API serves as a backend for [Hockey Teeth's Official Site](https://hockeyteethband.com).

## API Architecture
- **Amazon EC2:** Used to host the virtual machine where the API is running. The VM uses Amazon Linux 2023 as a platform and runs a Docker container with the application, as well as the API's nginx configuration.
- **Amazon ECR:** Used to store the Docker images for the API.
- **Amazon Route 53:** Manages the DNS records for the custom domain, routing traffic to the Elastic IP associated with the EC2 instance.

## Deploy API for Production

[AWS ECR Guide](https://docs.aws.amazon.com/AmazonECR/latest/userguide/getting-started-cli.html)
1. **Build the Image**

```sh
./gradlew build
docker-compose build
```

2. **Verify the Image**

```sh
docker images

REPOSITORY        TAG       IMAGE ID       CREATED              SIZE
hockeyteeth-api   latest    {{IMAGE_ID}}   About a minute ago   1.29GB
```

3. **Tag & Push the Image**

```sh
docker tag hockeyteeth-api:latest {{AWS_ACCOUNT_ID}}.dkr.ecr.us-west-2.amazonaws.com/hockeyteeth-api-production

aws ecr get-login-password --region us-west-2 | docker login --username AWS --password-stdin {{AWS_ACCOUNT_ID}}.dkr.ecr.us-west-2.amazonaws.com

docker push {{AWS_ACCOUNT_ID}}.dkr.ecr.us-west-2.amazonaws.com/hockeyteeth-api-production
```

3. **Delete Old Image in ECR**

Log into the [Elastic Container Registry](https://us-west-2.console.aws.amazon.com/ecr) and delete the image that is not tagged with `latest`. Keep costs low :tada:

4. **Deploy Image on EC2**

In the EC2 instance, run:

```sh
sudo systemctl restart hockeyteeth-api-production.service
```

## EC2 Setup & Deployment

### Application Setup
1. **EC2 Instance Setup**

Launch an EC2 instance with Amazon Linux. Ensure the security group allows traffic on ports 80 (HTTP) and 443 (HTTPS).

2. **Install Docker**

In the EC2 instance, run:

```sh
sudo yum update -y
sudo yum install docker -y
sudo service docker start
sudo usermod -a -G docker ec2-user

```

3. **Allow EC2 to Pull From ECR & Secrets Manager**

In the [IAM Console](https://us-east-1.console.aws.amazon.com/iamv2/home?region=us-west-2#/roles), create a role attached to the policy "AmazonEC2ContainerRegistryReadOnly." Since the API uses values from [Secrets Manager](https://us-west-2.console.aws.amazon.com/secretsmanager/listsecrets?region=us-west-2), also add the custom policy "SecretsManagerRead." This will allow the application in the EC2 instance to pull fresh Docker images from ECR and pull secret values on application startup.

4. **Create a Service**

In the EC2 instance, run:

```sh
sudo vi /etc/systemd/system/hockeyteeth-api-production.service

[Unit]
Description=Hockey Teeth API Production
Requires=docker.service
After=docker.service

[Service]
Environment="SPOTIFY_API_CLIENT_ID=..."
Restart=always
ExecStartPre=/bin/sh -c 'aws ecr get-login-password --region us-west-2 | docker login --username AWS --password-stdin {{AWS_ACCOUNT_ID}}.dkr.ecr.us-west-2.amazonaws.com'
ExecStartPre=/usr/bin/docker pull {{AWS_ACCOUNT_ID}}.dkr.ecr.us-west-2.amazonaws.com/hockeyteeth-api-production:latest
ExecStart=/usr/bin/docker run --name hockey-teeth -p 8080:8080 -e SPOTIFY_API_CLIENT_ID=... {{AWS_ACCOUNT_ID}}.dkr.ecr.us-west-2.amazonaws.com/hockeyteeth-api-production:latest
ExecStop=/usr/bin/docker stop -t 2 hockey-teeth
ExecStopPost=/usr/bin/docker rm -f hockey-teeth

[Install]
WantedBy=multi-user.target

# Set up the service
sudo systemctl daemon-reload
sudo systemctl enable hockeyteeth-api-production.service
sudo systemctl start hockeyteeth-api-production.service
```

In the EC2 instance, the application will be available at http://localhost:8080.

5. **Custom Domain**

The application is now available at an auto-assigned public IP address. The application needs to receive an Elastic IP address, such that we can use it as an entry in Route 53.

- In EC2, choose "Allocate Elastic IP address" and assign it to the EC2 instance.
- In Route 53, create an A record to connect [api.hockeyteethband.com](api.hockeyteethband.com) to this Elastic IP.

The application will be available at http://api.hockeyteethband.com. This needs to be secured to HTTPS.

### NGINX Setup

1. **Install NGINX**

In the EC2 instance, run:

```sh
sudo yum install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx
```

2. **Configure NGINX**

In the EC2 instance, inbound traffic needs to be routed to the API service, running on port 8080.

```sh
sudo vi /etc/nginx/nginx.conf

# add this code
server {
  server_name  api.hockeyteethband.com;
  root         /usr/share/nginx/html;

  # Load configuration files for the default server block.
  include /etc/nginx/default.d/*.conf;

  location / {
    proxy_pass http://localhost:8080;
}

# test the nginx configuration
sudo nginx -t
# deploy the new configuration
sudo systemctl reload nginx.service
```

3. **Install Certbot (HTTPS Management)**

In the EC2 instance, set up HTTPS forwarding.

```sh
# Use Python to install Certbot
sudo python3 -m venv /opt/certbot/
sudo /opt/certbot/bin/pip install --upgrade pip
sudo /opt/certbot/bin/pip install certbot certbot-nginx
# Ensure `certbot` command can be run
sudo ln -s /opt/certbot/bin/certbot /usr/bin/certbot
# Obtain certificate
sudo certbot --nginx
# Set up automatic renewal with a cron job
echo "0 0,12 * * * root /opt/certbot/bin/python -c 'import random; import time; time.sleep(random.random() * 3600)' && sudo certbot renew -q" | sudo tee -a /etc/crontab > /dev/null
sudo systemctl reload nginx.service
# Certbot will add this code to the nginx configuration
listen [::]:443 ssl ipv6only=on;
listen 443 ssl;
ssl_certificate /etc/letsencrypt/live/api.hockeyteethband.com/fullchain.pem;
ssl_certificate_key /etc/letsencrypt/live/api.hockeyteethband.com/privkey.pem;
include /etc/letsencrypt/options-ssl-nginx.conf;
ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
``` 
