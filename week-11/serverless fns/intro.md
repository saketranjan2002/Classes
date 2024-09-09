When you have to deploy it on the internet, there are a few ways - 
Go to aws, GCP, Azure, Cloudflare
1) Rent a VM (Virtual Machine) and deploy your app
2) Put it in an Auto scaling group
3) Deploy it in a Kubernetes cluster
 
There are a few downsides to doing this - 
1) Taking care of how/when to scale 
2) Base cost even if no one is visiting your website
3) Monitoring various servers to make sure no server is down
 
What if, you could just write the code and someone else could take care of all of these problems?


serverless backend : "Serverless" is a backend deployment in which the cloud provider dynamically manages the allocation and provisioning of servers. The term "serverless" doesn't mean there are no servers involved. Instead, it means that developers and operators do not have to worry about the servers.


Easier defination
What if you could just write your express routes and run a command. The app would automatically 
1) Deploy
2) Autoscale
3) Charge you on a per request basis (rather than you paying for VMs)
 
Problems with this approach
1) More expensive at scale
2) Cold start problem



There are many famous backend serverless providers - 
1) AWS Lambda
https://aws.amazon.com/pm/lambda/?trk=5cc83e4b-8a6e-4976-92ff-7a6198f2fe76&sc_channel=ps&ef_id=CjwKCAiAt5euBhB9EiwAdkXWO-i-th4J3onX9ji-tPt_JmsBAQJLWYN4hzTF0Zxb084EkUBxSCK5vhoC-1wQAvD_BwE:G:s&s_kwcid=AL!4422!3!651612776783!e!!g!!aws lambda!19828229697!143940519541

2) Google Cloud Functions
https://firebase.google.com/docs/functions

3) Cloudflare Workers
https://workers.cloudflare.com/





When should you use a serverless architecture?
1) When you have to get off the ground fast and don’t want to worry about deployments
2) When you can’t anticipate the traffic and don’t want to worry about autoscaling
3) If you have very low traffic and want to optimise for costs
