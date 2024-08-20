// write function to create a user table in your database.

import { Client } from "pg";

const client = new Client ({
    connectionString : "postgresql://neondb_owner:1Wh4AFeTYzHp@ep-old-sky-a5af3hlm.us-east-2.aws.neon.tech/neondb?sslmode=require"
});

async function createUser() {
    await client.connect();
    const result = await client.query(`
        CREATE TABLE USERS(
        ID SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP)`
    )
    console.log(result);
}

async function insertUserWithSQLInjection(){
    await client.connect();
    const result = await client.query(`
        INSERT INTO USERS VALUES(
        1,
        'saket2002',
        'saket2002@gmail.com',
        '1234')`
    )
    console.log(result);
}


async function insertUserSafe(username: string,email : string, password : string ){
    await client.connect();
    const Insertquery = `INSERT INTO USERS VALUES($1,$2,$3);`
    const values = [username, email,  password];
    const result = await client.query(Insertquery,values);
    console.log(result);
}


createUser();