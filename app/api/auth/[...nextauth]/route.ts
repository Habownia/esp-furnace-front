import NextAuth, { NextAuthOptions } from 'next-auth';
import { MongoClient } from 'mongodb';
import bcrypt from 'bcrypt';
import CredentialsProvider from 'next-auth/providers/credentials';

import { authOptions } from '@/lib/NextAuthOptions';

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
