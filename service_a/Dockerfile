FROM centos

WORKDIR /home/service-a

COPY . .

RUN dnf module enable nodejs:12 -y
RUN dnf install nodejs -y
RUN npm install

EXPOSE 3000

ENTRYPOINT [ "npm", "run", "dev" ]