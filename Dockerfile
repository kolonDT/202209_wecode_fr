FROM node:16.17.1

WORKDIR /usr/web

COPY package*json ./

RUN npm install

COPY . ./

EXPOSE 3000

CMD ["npm", "start"]
