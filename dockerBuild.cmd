SET containerFolder=c:\temp\container
:: Remove the old image if it exists before creating a new image
docker rmi angular2template:latest
::Create a temporary folder and copy in all the files needed for the new container
md %containerFolder%
xcopy build\*.* %containerFolder%\build\*.* /s
copy Dockerfile %containerFolder%\
:: Build the new container
docker build -t angular2template:latest %containerFolder%
:: Cleanup the temporary folder
rd %containerFolder% /S /Q
