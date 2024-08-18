FROM node:18

WORKDIR /usr/app

COPY package*.json ./
RUN npm install --quiet

COPY src ./src

EXPOSE 3000
CMD ["npm", "start"]
