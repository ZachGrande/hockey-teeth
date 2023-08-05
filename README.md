# Hockey Teeth
[hockeyteethband.com](https://hockeyteethband.com)

## Hockey Teeth Spring Boot API
This repository contains the Spring Boot (3.1.2) API for Hockey Teeth. Follow the instructions below to set up your development environment and run the API.

### Prerequisites
- Java 17 (JDK: corretto-17)
- Docker

### Running the API for Development
1. **Clone the Repository**

```
git clone [repository-url] && cd [repository-directory]
```

2. **Running with Gradle**
```
./gradlew bootRun
```

API will be accessible at http://localhost:8080.

### Preparing the Docker Container
1. **Building the Docker Image**

```
./gradlew build

docker build -t hockeyteeth-api:latest .
```

2. **Running the Docker Container**

```
docker run -p 8080:8080 hockeyteeth-api:latest
```
API will be accessible at http://localhost:8080.

3. **Stopping the Docker Container**

```
# list running docker containers
docker ps

# stop the container
docker stop [CONTAINER_ID]
```