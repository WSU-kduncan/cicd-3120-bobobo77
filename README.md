# cicd-3120-bobobo77
cicd-3120-bobobo77 created by GitHub Classroom
This is the README to the website for my 5th project. 

#### Setting up WSL 2 and Docker:

_Due to impetuousness and lack of use, I was using my github desktop to do my editing of my project._
_I had not realized until attempting to dockerize my website that WSL 2 was not running on the Desktop_
_for me to try. Also, MobaXterm likes to stick with WSL 1 for now, and I have no_
_idea how to resolve that. Once I got that worked out, I was able to get docker build and docker run to successfully work!_
_And I even got multiple resources running so it looks marginally better than just a blank template._

Setting up WSL 2 was probably the biggest hurdle for this stage, but getting my docker container was not easy.
I had foundation already set, and docker pull httpd is the container I needed. ```Docker pull``` was also a lifesaver for
being the command to request containers from the Docker server. 

#### Docker Build:

the Dockerfile is the critical part of this section. You need the 
	```FROM [publisher]```
in your file to tell the file what container you are using. I used httpd, which is the name for the apache2 sturcture for 
web services. After that, the next most important part of the Dockerfile is ```COPY [file(s)/directory] [destination path]```
where you copy what you need to the desired destination. ". . " used in the file/directory area, everything at the same directory as the 
Dockerfile is selected. The last thing that matters on the Dockerfile is getting a port on the image to open up for listening.
```Expose [port(s)]``` is used to get those ports to listen for requests on those ports. 22 for ssh, 80/443 for http/https, ect. 

The command I used for building the image is: "docker build /[repository]/ -t [image publisher]"


#### Running the thing to see results:
For this, I do a ```docker run -dit --name [Name you want the image to be] -v [repository] -p [port speaking]:[port listening] [image structure]```
to properly build the container.

After creating the container, I used the Docker desktop application to immediately go to the site via the first button on the left 
that says "open in browser"

#### Making a public repository
This was pretty easy after logging into Dockerhub. I just clicked on Repositories and "New repository". I then proceeded
to give it a name and I now had an empty container to fill. 

#### Dockerhub authentication
To authenticate Dockerhub, I set up a github secret with a unique key and the username so the 2 are sort of linked.
I found making Github secrets not too hard to do, overall. I clicked on Settings, then on secrets on the drop-down menu.
After that, each secret needed a name and the values put in.

#### Github actions
I think I need more practice with this portion of the project, as using the template doesn't feel intuitive, and
every resource formats it slightly differently. 

