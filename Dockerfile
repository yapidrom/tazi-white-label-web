FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

ARG PUBLIC_GOOGLE_MAPS_API_KEY
ENV PUBLIC_GOOGLE_MAPS_API_KEY=$PUBLIC_GOOGLE_MAPS_API_KEY

RUN npm run build

# Production: serve with nginx
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

# SPA fallback: 404 → index.html (for any future dynamic routes)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
