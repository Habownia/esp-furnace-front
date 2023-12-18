import { MongoClient } from 'mongodb';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

export async function GET() {
	const client = await MongoClient.connect(`${process.env.MONGO_URI}`);
	const users = client.db(process.env.DB_NAME).collection('users');

	const password = bcrypt.hashSync('password', 10);
	await users.insertOne({
		email: 'admin@example.com',
		password: password,
		role: 'admin',
	});

	return NextResponse.json({ success: true });
}
