import { MongoClient } from 'mongodb';
import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; // defaults to force-static

export async function GET(req: NextRequest) {
	try {
		// gets Parameters from url
		const email = req.nextUrl.searchParams.get('email')!;
		const password = req.nextUrl.searchParams.get('password')!;

		const passwordHashed = bcrypt.hashSync(password, 10);

		// MongoDB
		const client = await MongoClient.connect(`${process.env.MONGO_URI}`);
		const users = client.db(process.env.DB_NAME).collection('users');

		//Creates user
		await users.insertOne({
			email: email,
			password: passwordHashed,
			role: 'user',
		});
		client.close();

		return NextResponse.json({ success: true });
	} catch (error) {
		return NextResponse.json({ success: false, error });
	}
}
