# Build stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
# If you have build step (TypeScript), add it here

# Runtime stage
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app .

EXPOSE 3000
CMD ["node", "index.js"]   # change to your main file if different