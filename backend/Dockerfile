
FROM maven:3.9.6-eclipse-temurin-17 AS build

WORKDIR /app

COPY pom.xml .

RUN mvn dependency:go-offline -B

COPY . .

RUN mvn clean package -DskipTests -B


FROM openjdk:17-slim


WORKDIR /app


COPY --from=build /app/target/*.jar /app/ElectionApplication.jar


EXPOSE 8082


CMD [ "java" , "-jar", "/app/ElectionApplication.jar"  ]