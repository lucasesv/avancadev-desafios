FROM alpine

WORKDIR /home/service-a

COPY . .

RUN apk add --update nodejs npm
RUN npm install

EXPOSE 3000

ENTRYPOINT [ "npm", "run", "dev" ]