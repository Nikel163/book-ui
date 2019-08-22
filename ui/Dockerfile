FROM node:12.8.0-alpine AS builder
COPY . ./ui
WORKDIR /ui
RUN npm i && $(npm bin)/ng build
RUN $(npm bin)/ng build --prod

FROM nginx:1.17.3-alpine
COPY --from=builder /ui/dist/ui /usr/share/nginx/html