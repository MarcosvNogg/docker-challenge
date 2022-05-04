FROM node:15
WORKDIR /usr/src/app
COPY ./package*.json /usr/src/app/
ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz
RUN apt-get update && apt-get install -y nodejs && npm install -g -y npm@8.8.0 && apt-get install -y wget && npm install && npm install mysql --save
COPY ./ /usr/src/app/
EXPOSE 8080