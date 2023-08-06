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
git clone git@github.com:ZachGrande/hockey-teeth.git && cd hockey-teeth/api/hockey-teeth
```

2. **Build with Gradle**

```
./gradlew build
```

3. **Run Docker Container**

```
./runapi.sh
```

API will be accessible at http://localhost:8080.