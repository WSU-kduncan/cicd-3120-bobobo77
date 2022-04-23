FROM httpd:2.4
MAINTAINER Bobobo77
COPY /website/  /usr/local/apache2/htdocs/
EXPOSE 80
