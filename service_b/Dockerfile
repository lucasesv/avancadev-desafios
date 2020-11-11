FROM alpine

WORKDIR /home/service-b

COPY . .

RUN apk add --update nodejs npm
RUN npm install

EXPOSE 3001

ENTRYPOINT [ "npm", "run", "dev" ]