FROM amazoncorretto:17

LABEL maintainer="zach.grande23@gmail.com"
LABEL version="1.0"
LABEL description="Docker image for the Hockeyteeth Spring Boot API"

WORKDIR /app

COPY build/libs/api-0.0.1-SNAPSHOT.jar /app/hockeyteeth-api.jar

CMD ["java", "-jar", "/app/hockeyteeth-api.jar"]

EXPOSE 8080
