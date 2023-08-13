# Hockey Teeth
[hockeyteethband.com](https://hockeyteethband.com)

## Hockey Teeth Spring Boot API
This repository contains the Spring Boot (3.1.2) API for Hockey Teeth. Follow the instructions below to set up your development environment and run the API.

Find more details at the [API's README](api/hockey-teeth/README.md).

### Prerequisites
- Java 17 (JDK: corretto-17)
- Docker

### Running the API for Development
1. **Clone the Repository**

```sh
git clone git@github.com:ZachGrande/hockey-teeth.git && cd hockey-teeth/api/hockey-teeth
```

2. **Build with Gradle**

```sh
./gradlew build
```

3. **Run Docker Container**

```sh
AWS_ACCESS_KEY_ID=...
AWS_DEFAULT_REGION=...
AWS_SECRET_ACCESS_KEY=...
SPOTIFY_API_CLIENT_ID=...

./run-api.sh
```

API will be accessible at http://localhost:8080.
