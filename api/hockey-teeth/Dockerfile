FROM gradle:8.10.1-jdk17 AS builder
WORKDIR /app
COPY . .

RUN ./gradlew build

RUN mkdir -p /target
RUN cp build/libs/*-SNAPSHOT.jar /target/

FROM amazoncorretto:17
WORKDIR /app
COPY --from=builder /target /app

ENTRYPOINT java -jar $JAR_FILE
