FROM httpd:2.4
MAINTAINER Bobobo77
COPY . .  /usr/local/apache2/htdocs/
EXPOSE 80