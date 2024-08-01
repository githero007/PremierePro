
import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgresql://postgres:test@localhost:5432/todo");
    await client.connect();
    return client;
}