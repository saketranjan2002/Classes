Initialising a worker

1) npm create cloudfare -- my-app
2) Type of Application -> "Hello World" Worker
3) Do you want to deploy your app -> NO



In the package.json
1) wrangler is one real dependency 
wrangler is the CLI for cloudfare


wrangler 
1) npx wrangler login
2) npx wrangler whoami
3) npx wrangler deploy


Express can't be used in cloud fare workers since
express have deep dependencies with the node.js 

Routing is difficult is cloudfare workers, hence hono library is used
1) npm create hono@latest my-app
2) npm run dev
3) npm run deploy
