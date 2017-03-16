FROM yeghishe/nodejs:0.12.7

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 3000
CMD ["forever", "-a", "-o", "/logs/mydemoapp.log", "-e", "/logs/mydemoapp.log", "-c", "node", "./bin/www"]