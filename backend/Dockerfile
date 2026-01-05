# Stage 1: Build
FROM eclipse-temurin:21-jdk-alpine AS builder

WORKDIR /app

# Copy the wrapper and configuration first to leverage Docker cache
COPY .mvn/ .mvn
COPY mvnw pom.xml ./

# FIX: Ensure the wrapper has execution permissions
RUN chmod +x mvnw

# Download dependencies (this layer is cached unless pom.xml changes)
RUN ./mvnw dependency:go-offline

# Copy source and build
COPY src ./src
RUN ./mvnw clean package -DskipTests

# Stage 2: Runtime
FROM eclipse-temurin:21-jre-alpine

WORKDIR /app

# Copy the built jar from the builder stage
# Note: Using a specific name if you know it, or a wildcard
COPY --from=builder /app/target/*.jar app.jar

# Railway dynamic port binding
EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]