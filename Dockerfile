# To build and run with Docker:
#
#	1) Setup Docker = https://msdn.microsoft.com/en-us/virtualization/windowscontainers/quick_start/quick_start_windows_10
#   2) md c:\source\nano
#	3) cd c:\source\nano
#	4) copy "c:\program files\nodejs" c:\source\nano\nodejs
#	5) copy c:\source\Angular2NodeTemplate\build c:\source\nano\build
#   6) copy c:\source\Angular2NodeTemplate\Dockerfile c:\source\nano\
#  	7) docker build -t node:test .
#  	8) docker run -d -p 3000:3000 --name webserver node:test
#  	8b) optional remove after completes = docker run -rm -p 3000:3000 --name webserver node:test
#  	9) docker logs <container id or name>
#   10) option #1 to get IP = docker inspect <container id or name>
#	10) option #2 to get IP =  docker exec -it <container id or name> ipconfig
# 	11) http://<container ip>:3000
#	12) docker stop <container id or name>
#	13) docker rm <container id or name>
#   14) optional to remove all stopped containers = FOR /f "tokens=*" %i IN ('docker ps -a -q') DO docker rm %i
#
FROM microsoft/nanoserver
COPY nodejs /windows/system32
RUN mkdir build
COPY build /build
WORKDIR /build
RUN npm install
EXPOSE 3000
CMD [ "node.exe", "server.js" ]