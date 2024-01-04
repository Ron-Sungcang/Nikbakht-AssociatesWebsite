FROM node:latest

WORKDIR /app

EXPOSE 3000

ENV PATH /app/node_modules/.bin:$PATH


RUN npm install react-router-dom
RUN npm install @mysql/xdevapi --save --save-exact
#RUN npm install mysql
RUN npm install react-scripts express body-parser nodemon cors express-session react-router-dom react-bootstrap bootstrap@5.1.3 util

COPY . ./

CMD ["npm", "start"]