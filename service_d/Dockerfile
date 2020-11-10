FROM centos

WORKDIR /home/service-d

COPY . .

RUN dnf module enable nodejs:12 -y
RUN dnf install nodejs -y
# RUN dnf install git -y
RUN npm install

EXPOSE 3003

ENTRYPOINT [ "npm", "run", "dev" ]