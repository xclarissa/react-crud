# Etapa 1: build

FROM node:22-alpine as build
WORKDIR /app
COPY package*json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa 2: servir com Nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]