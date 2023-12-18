import { MongoClient, ObjectId } from 'mongodb';
import { getServerSession } from 'next-auth';

type User = {
	_id: ObjectId;
	email: string;
	password: string;
	role: string;
};

export async function getCurrUser() {
	// get the session
	const session = await getServerSession();
	// gets the logged user email
	const loggedUserEmail = session?.user?.email;

	// MongoDB
	const client = await MongoClient.connect(`${process.env.MONGO_URI}`);
	const users = client.db(process.env.DB_NAME).collection('users');

	const currUser = await users.findOne({ email: loggedUserEmail });

	return currUser as User;
}
