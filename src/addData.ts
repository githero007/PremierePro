import { getClient } from "./index";

async function createTable() {
    const client = await getClient();
    const createQuery = `CREATE TABLE users(
     id  SERIAL PRIMARY KEY,
     name TEXT,
     email TEXT,
     password TEXT
    )`
    const result = await client.query(createQuery);
    console.log(result);
}



createTable();