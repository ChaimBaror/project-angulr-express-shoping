FROM ubuntu:20.04
ENV DEBIAN_FRONTEND=noninteractive
RUN apt update
RUN apt install -y npm curl
RUN curl -sL https://deb.nodesource.com/setup_14.x -o setup_14.sh 
RUN chmod +x setup_14.sh && ./setup_14.sh
RUN apt update

RUN apt-get install -y nodejs


COPY package.json .
COPY package-lock.json .


RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm" , "start" ]



