FROM amazoncorretto:17

LABEL maintainer="zach.grande23@gmail.com"
LABEL version="1.0"
LABEL description="Docker image for the Hockeyteeth Spring Boot API"

WORKDIR /app

RUN yum install -y unzip jq

RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" \
    && unzip awscliv2.zip \
    && ./aws/install

COPY build/libs/api-0.0.1-SNAPSHOT.jar /app/hockeyteeth-api.jar
COPY start-app /app/start-app.sh

RUN chmod +x /app/start-app.sh

CMD ["/app/start-app.sh"]

EXPOSE 8080
