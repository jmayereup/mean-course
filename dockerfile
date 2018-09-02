FROM node:8.11.4

WORKDIR /home/mean-course

EXPOSE 4200

RUN npm i -g @angular/cli nodemon

