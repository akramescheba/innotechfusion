#Image 
FROM maven:3.8.6-openjdk-11 AS build

#Repertoire de travail;
WORKDIR /app

#Copie du fichier pom.xml de config de spring-boot;
COPY pom.xml .

#Script de téléchargement des dependances de maven; 
RUN mvn dependency:go-offline -B

COPY . .

FROM openjdk:11-jre-slim

WORKDIR /app

COPY --from=build /app/target/*.jar /app/election-0.0.1-SNAPSHOT.jar


EXPOSE 8082

#Command de lancement du Dockerfile
CMD ["java", "-jar", "election-0.0.1-SNAPSHOT.jar"]



