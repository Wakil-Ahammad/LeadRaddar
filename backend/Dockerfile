# ══════════════════════════════════════════════
# ServiceIntentRadar — Backend Dockerfile
# Multi-stage: Maven build → Java 21 runtime
# ══════════════════════════════════════════════

# ── Stage 1: Build ──
FROM eclipse-temurin:21-jdk-alpine AS builder

WORKDIR /app

# Cache Maven dependencies
COPY pom.xml .
RUN apk add --no-cache maven && \
    mvn dependency:go-offline -B

# Build application
COPY src ./src
RUN mvn clean package -DskipTests -B

# ── Stage 2: Runtime ──
FROM eclipse-temurin:21-jre-alpine

WORKDIR /app

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

COPY --from=builder /app/target/*.jar app.jar

RUN chown -R appuser:appgroup /app
USER appuser

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
