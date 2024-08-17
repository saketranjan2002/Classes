import { getClient } from "./utils";


// sql injection
// SQL injection is a code injection technique that might destroy your database.
// SQL injection usually occurs when you ask a user for input, like their username/userid, and instead of a name/id, the user gives you an SQL statement that you will unknowingly run on your database.


async function createEntries() {
    const client = await getClient();
    const insertUserText = 'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id'; // using $1,$2 here to prevent sql injection
    const userValues = ['john.do11e@gmail2.com', 'hashed_password_here'];

    let response = await client.query(insertUserText, userValues);
    const insertTodoText = 'INSERT INTO todos (title, description, user_id, done) VALUES ($1, $2, $3, $4) RETURNING id';
    const todoValues = ['Buy groceries', 'Milk, bread, and eggs', response.rows[0].id, false];
    await client.query(insertTodoText, todoValues);

    console.log("Entries created!");
}



createEntries();