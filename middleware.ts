import { getToken } from 'next-auth/jwt';
import { NextRequestWithAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default async function middleware(req: NextRequestWithAuth) {
	// blocks login page to logged users
	const token = await getToken({ req });
	const isAuthenticated = !!token;

	console.log(req.nextUrl);

	if (req.nextUrl.pathname.startsWith('/login') && isAuthenticated) {
		return NextResponse.redirect(new URL('/account', req.url));
	}

	if (req.nextUrl.pathname.startsWith('/chart'))
		return NextResponse.redirect(new URL('/chart/1', req.url));
}

// secured pages (unauthenticated users cannot enter)
export const config = { matcher: ['/chart', '/table'] };
