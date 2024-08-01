import { getClient } from ".";
async function updateTable(email: string) {
    const client = await getClient();
    const updateQuery = `
     UPDATE users 
     SET email = $1
     WHERE id = 1;
    `;
    const updateTable = [email];
    const result = await client.query(updateQuery, updateTable);
    console.log(result);
}
updateTable("aayush69n@gmail.com")