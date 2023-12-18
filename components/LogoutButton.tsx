'use client';

import { signOut } from 'next-auth/react';
import { IoLogOutOutline } from 'react-icons/io5';

function LogoutButton() {
	async function handleLogout() {
		await signOut({ callbackUrl: '/' });
	}

	return (
		<button className='btn btn-outline btn-error' onClick={handleLogout}>
			<IoLogOutOutline size={25} />
			Wyloguj
		</button>
	);
}

export default LogoutButton;
