import { getClient } from ".";
async function addValues(name: string, email: string, password: string) {
    const client = await getClient();
    const insertQuery = `
     INSERT INTO users(name,email,password)
     VALUES($1,$2,$3)
    `
    const insertValue = [name, email, password]
    const response = await client.query(insertQuery, insertValue);
    console.log(response);
}
addValues('aayush', 'aayush68n@gmail.com', 'hashedpassword');