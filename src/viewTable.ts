import { getClient } from ".";
async function viewTable() {
    const client = await getClient();
    const selectQuery = `
    SELECT * from users
    `
    const result = await client.query(selectQuery);
    console.log(result);
}
viewTable();