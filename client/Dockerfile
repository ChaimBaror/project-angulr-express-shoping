FROM ubuntu:20.04

ENV DEBIAN_FRONTEND=noninteractive
RUN apt update
RUN apt install -y npm curl
RUN curl -sL https://deb.nodesource.com/setup_14.x -o setup_14.sh 
RUN chmod +x setup_14.sh && ./setup_14.sh
RUN apt update

RUN apt-get install -y nodejs

RUN npm install -y -g @angular/cli

RUN mkdir /app
COPY package.json /app/

RUN npm install

COPY . /app/
WORKDIR /app
EXPOSE 4200

CMD ["ng","serve","--host", "0.0.0.0"]



