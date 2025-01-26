# Dockerfile
FROM maven:3.9.4-eclipse-temurin-17 AS build
WORKDIR /app
COPY app/pom.xml ./
RUN mvn dependency:go-offline -B
COPY app/src ./src
RUN mvn package -DskipTests

FROM eclipse-temurin:17
WORKDIR /app
COPY --from=build /app/target/*.war app.war
CMD ["java", "-jar", "app.war"]
