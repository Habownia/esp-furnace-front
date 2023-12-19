import { MongoClient, ObjectId } from 'mongodb';
import { getServerSession } from 'next-auth';

type User = {
	_id: ObjectId;
	email: string;
	password: string;
	role: string;
};

export async function getCurrUser() {
	if (process.env.NODE_ENV == 'development')
		return {
			_id: new ObjectId('6580238551a59a894f71bd17'),
			email: 'test@test.com',
			password:
				'$2b$10$FP/0hUt2Q6fMma4guxdU1uEsB5HE/Xim3XXp4gMQTjEgetCNpSsqm',
			role: 'user',
		} as User;

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
