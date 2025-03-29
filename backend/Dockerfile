#Image 
FROM maven:3.8.6-openjdk-11 AS build

#Repertoire de travail;
WORKDIR /app

#Copie du fichier pom.xml de config de spring-boot;
COPY pom.xml .

COPY src ./src
RUN mvn clean package -DskipTests

FROM openjdk:11-jre-slim

WORKDIR /app

COPY --from=build /app/target/election-0.0.1-SNAPSHOT.jar /app/ElectionApplication.jar


EXPOSE 8082

#Command de lancement du Dockerfile
CMD ["java", "-jar", "ElectionApplication.jar"]



