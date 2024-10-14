



worker1 -> connection pool -> DB
           /
    worker2 


# DB have a connection limit so it makes sense to have an interface called connection pool which maintains one persistent connection with the DB.

# prisma have some dependencies which are node.js specific, so we will have to exclude them while using prisma in cloudflare workers

REF : https://www.prisma.io/docs/orm/prisma-client/deployment/edge/deploy-to-cloudflare
Also read the Edge function section




1) npm create cloudflare@latest
2) npm i --save-dev prisma
3) npx prisma init
4) create your schema
5) npx prisma migrate dev --name name_of_migration
6) Enable Accelerate in prisma data platform
    1) give postgres url
    2) select location close to the DB

7) add DATABASE_URL in the wrangler.toml as wrangler.toml is used to define all the env variables. [vars] is written before defining env variable in wrangler.toml

# all the env variables that we want to use in index.ts is in wrangler.toml 
# all the env variables that we want to use in CLI is in .env file

8) When running the migrate command, we need to connect directly to DB and not the connection pool, hence we use DIRECT_URL="postgres url" in .env file and schema.prisma file

OR

while migration we can change the DATABASE_URL AND REVERT AGAIN

9) npm i @prisma/extension-accelerate

10) generate prisma client
# npx prisma generate --no-engine
# no-engine flag is used to reduce the bundle size ie to exclude dependencies that we don't need in cloud environment

Write login in your index.ts

11) npx wrangler whoami
12) npm run deploy