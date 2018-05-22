FROM node:carbon

ENV PORT 5000

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies (package.json and package-lock.json)
COPY package*.json ./
COPY yarn.lock ./


RUN yarn install
# If you are building your code for production
# RUN yarn install --only=production

# Bundle app source
COPY . .

EXPOSE 5000
# On production run start
CMD [ "yarn", "start" ]

# On Development run dev
#CMD [ "yarn", "start" ]

