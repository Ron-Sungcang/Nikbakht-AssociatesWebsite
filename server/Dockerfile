FROM node:latest

WORKDIR /app
COPY package*.json ./

RUN npm install
RUN npm install react-router-dom
RUN npm install @mysql/xdevapi --save --save-exact
RUN npm install i nodemailer
#RUN npm install mysql
RUN npm install express body-parser nodemon cors express-session react-router-dom react-bootstrap bootstrap@5.1.3 util nodemailer

COPY . .
EXPOSE 8080

CMD ["npm", "start"]