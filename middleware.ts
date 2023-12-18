import { getToken } from 'next-auth/jwt';
import { NextRequestWithAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default async function middleware(req: NextRequestWithAuth) {
	// blocks login page to logged users
	const token = await getToken({ req });
	const isAuthenticated = !!token;

	console.log(req.nextUrl);

	if (req.nextUrl.pathname.startsWith('/login') && isAuthenticated) {
		return NextResponse.redirect(new URL('/account', req.url)); //TODO account page
	}
}
