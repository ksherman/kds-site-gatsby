webpackJsonp([0x70962330b0bd],{324:function(e,i){e.exports={data:{markdownRemark:{html:'<p>These are notes from a talk by Laura Frank during the HighEdWeb 2015 Technology Academy. Laura works at CodeShip. </p>\n<p><a href="https://github.com/rheinwein/rails-demo-apps">https://github.com/rheinwein/rails-demo-apps</a></p>\n<ul>\n<li>Docker != containers</li>\n<li>\n<p>Docker is a tool that managers containers</p>\n<ul>\n<li>Build images to run as containers</li>\n<li>Responsible for code execution</li>\n<li>Con manage entire applications with docker-compose</li>\n<li>Provision machines with docker-machine</li>\n<li>docker-swarm: management for many machines</li>\n</ul>\n</li>\n<li>A Container is a virtualization layer - sort of like a VM - but with some fundamental differences. </li>\n<li>You can use Docker inside of other VMs</li>\n<li>\n<p>Containers</p>\n<ul>\n<li>Self-contained execution environment</li>\n<li>Share the kernel of host system</li>\n<li>Are isolated from other containers</li>\n<li>Fast boot-times and low overhead</li>\n</ul>\n</li>\n<li>This can seem complex, but they can greatly reduce the amount of time and space needed to run your application. When you close the container, everything is gone. </li>\n<li>TL;DR: spend less time fight with dependencies, more time building what you want. </li>\n<li>The Docker Ecosystem: Build, ship, run</li>\n<li>Docker Images: are images containers? No, an image is like a class and a container is an instance of that class</li>\n<li>The Docker Hub: repos of Docker Images, webhooks, build triggers, authentication, private repos. Web GUI or CLI</li>\n<li>\n<p>Different Types of Images:</p>\n<ul>\n<li>Service: self-contained service like PostgreSQL or MySQL</li>\n<li>Project Base: intended to serve as a base of your own project. Does not directly provide a service, like Ruby, golang.</li>\n<li>Official Image: maintained by the organization/company themselves (official Rails image)</li>\n</ul>\n</li>\n<li>\n<p>Build Your Own Docker Images</p>\n<ul>\n<li>starts with a docker file</li>\n<li>Docker Compose (yml)</li>\n<li>Docker Toolbox</li>\n</ul>\n</li>\n<li>How to get the containers to communicate with one another: linking, environmental variables, some additional configuration</li>\n<li>What about persistent data? Mounting directories/volumes; you can mount a special volume for databases. </li>\n<li>Race conditions? Docker service could be up and tunning, but the service itself might not actually be available yet. Custom script to do a health check to see if it is available</li>\n<li>\n<p>Docker in Production</p>\n<ul>\n<li>Integrating with CI/CD</li>\n<li>Can run tests, build new images, pushing that image to a registry, firing up containers with the new image</li>\n<li>Some kind of orchestration tool should be doing this for you. (Kubernetes)</li>\n</ul>\n</li>\n</ul>\n<p>Peace<br>-- KS<br>Web Developer at Benedictine University near Chicago</p>',frontmatter:{title:"Developing Containerized Applications with Docker",author:"Kevin D. Sherman",date:"October 04, 2015"}}},pathContext:{slug:"/2015-10-04-developing-containerized-applications-with-Docker/"}}}});
//# sourceMappingURL=path---2015-10-04-developing-containerized-applications-with-docker-43d5235051d9f9646af3.js.map