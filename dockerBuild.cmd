SET containerFolder=c:\temp\container
:: Remove the old image if it exists before creating a new image
docker rmi node:angular2template
::Create a temporary folder and copy in all the files needed for the new container
md %containerFolder%
xcopy "c:\program files\nodejs\*.*" %containerFolder%\nodejs\*.* /s
xcopy build\*.* %containerFolder%\build\*.* /s
copy Dockerfile %containerFolder%\
:: Build the new container
docker build -t node:angular2template %containerFolder%
:: Cleanup the temporary folder
rd %containerFolder% /S /Q
