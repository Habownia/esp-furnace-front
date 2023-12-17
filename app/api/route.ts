import NextAuth from 'next-auth';
import { MongoClient } from 'mongodb';
import bcrypt from 'bcrypt';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
	providers: [
		CredentialsProvider({
			id: 'credentials',
			name: 'Credentials',
			credentials: {
				email: {
					label: 'E-mail',
					type: 'text',
					placeholder: 'example@example.com',
				},
				password: {
					label: 'Password',
					type: 'password',
				},
			},
			async authorize(credentials) {
				const client = await MongoClient.connect(`${process.env.MONGO_URI}`);
				const usersCollection = client
					.db(process.env.DB_NAME)
					.collection('users');

				const email = credentials?.email.toLowerCase();
				const user = await usersCollection.findOne({ email });

				if (!user) {
					throw new Error('User does not exist.');
				}

				//validate password
				const passwordIsValid = await bcrypt.compare(
					credentials?.password!,
					user.password
				);

				if (!passwordIsValid) {
					throw new Error('Invalid credentials');
				}

				return {
					id: user._id.toString(),
					...user,
				};
			},
		}),
	],
	session: {
		strategy: 'jwt',
	},
});

export { handler as GET, handler as POST };
