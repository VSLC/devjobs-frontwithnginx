FROM node:16

# pasta para aonde vai o build
WORKDIR /app

COPY . .
RUN npm i

RUN mkdir -p /var/www/html
RUN mv build/* /var/www/html

WORKDIR /

RUN rm -rf /app