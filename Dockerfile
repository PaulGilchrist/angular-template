# Ensure you have setup Docker and created a NodeJS container
#    See dockerReadMe.md
# docker build -f Dockerfile -t angular2template:nodenano .
# docker run -it -rm -p 8080:3000 angular2template:nodenano
# docker inspect <containerId>
FROM node:nano
RUN mkdir build
COPY build /build
WORKDIR /build
# RUN npm install
EXPOSE 3000
CMD [ "node.exe", "server.js" ]