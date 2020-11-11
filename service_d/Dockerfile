FROM alpine

WORKDIR /home/service-d

COPY . .

RUN apk add --update nodejs npm
RUN npm install

EXPOSE 3003

ENTRYPOINT [ "npm", "run", "dev" ]