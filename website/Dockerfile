FROM httpd:2.4
MAINTAINER Bobobo77
RUN yum -y install httpd
COPY .index.html  /var/www/
EXPOSE 8080
CMD [“/usr/sbin/httpd”, “-D”, “FOREGROUND”]

