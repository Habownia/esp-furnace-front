import { getToken } from 'next-auth/jwt';
import { NextRequestWithAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default async function middleware(req: NextRequestWithAuth) {
	// blocks login page to logged users
	const token = await getToken({ req });
	const isAuthenticated = !!token;

	const urlPathName = req.nextUrl.pathname;

	// disabled pages
	//todo make this more scalable
	if (urlPathName.startsWith('/chart') && !isAuthenticated) {
		return NextResponse.redirect(new URL('/', req.url));
	}

	if (urlPathName.startsWith('/table') && !isAuthenticated) {
		return NextResponse.redirect(new URL('/', req.url));
	}
	//end of disabled pages

	if (urlPathName.startsWith('/login') && isAuthenticated) {
		return NextResponse.redirect(new URL('/account', req.url));
	}

	if (urlPathName.startsWith('/chart') && isAuthenticated)
		return NextResponse.redirect(new URL('/chart/1', req.url));
}

export const config = { matcher: ['/login', '/chart/:path*', '/table'] };
