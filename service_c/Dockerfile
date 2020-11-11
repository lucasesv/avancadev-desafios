FROM alpine

WORKDIR /home/service-c

COPY . .

RUN apk add --update nodejs npm
RUN npm install

EXPOSE 3002

ENTRYPOINT [ "npm", "run", "dev" ]