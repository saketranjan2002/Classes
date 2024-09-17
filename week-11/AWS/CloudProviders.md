1) Cloud Providers have a bunch of compute 
2) we can simply use that compute by renting the servers by different cloud provisers

Why can't we use our machine to deploy our code
3) Our local machine does not have any public IP, Cloud Provider's machine have a public IP that can be accessed on the web.


In the network settings
1) we can enable "allow HTTP traffic from internet" and "allow HTTPS traffic from internet"
This will make sure port 80 and 443 are reserved

www.app.100xdev.com:80 is same as www.app.100xdev.com




nginx is a open source software for web serving, reverse proxing, caching, load balancing, media streaming

reverse proxy
                                                        backend deployed on 81 port
                                                        /
client1.app.100xdev.com / client2.app.100xdev.com -> 80 port (nginx server)
                                                        \
                                                        backend deployed on 82 port