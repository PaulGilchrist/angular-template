# Ensure you have setup Docker and created a NodeJS container
#    See edockerReadMe.md
FROM node:latest
RUN mkdir build
COPY build /build
WORKDIR /build
RUN npm install
EXPOSE 3000
CMD [ "node.exe", "server.js" ]