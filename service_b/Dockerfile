FROM centos

WORKDIR /home/service-b

COPY . .

RUN dnf module enable nodejs:12 -y
RUN dnf install nodejs -y
RUN npm install

EXPOSE 3001

ENTRYPOINT [ "npm", "run", "dev" ]