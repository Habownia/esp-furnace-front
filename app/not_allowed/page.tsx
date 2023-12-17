// import { nextauthOptions } from '@/lib/nextauthOptions';

// Tutorial from this site https://reacthustle.com/blog/how-to-implement-mongodb-authentication-in-nextjs-nextauthjs

// About getServerSession https://next-auth.js.org/configuration/nextjs#getserversession

import { getServerSession } from 'next-auth/next';
import React from 'react';
import { redirect } from 'next/navigation';

export default async function RestrictedPage() {
	// get the session
	const session = await getServerSession(nextauthOptions);

	// redirect to signin if there is no session.
	if (!session?.user) {
		const url = new URL('/api/auth/signin', 'http://localhost:3000');
		url.searchParams.append('callbackUrl', '/restricted');
		redirect(url.toString());
	}

	// display the page
	return (
		<div>
			<h1>Welcome to the Restricted Page, {session?.user?.name}</h1>
		</div>
	);
}
