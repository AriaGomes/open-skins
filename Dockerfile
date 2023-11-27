FROM node:18-alpine
RUN apk add --no-cache npm yarn
WORKDIR /home
COPY . .
EXPOSE 3000
CMD ["yarn", "start"]