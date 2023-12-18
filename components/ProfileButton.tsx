import { getSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import { CgProfile } from 'react-icons/cg';

async function ProfileButton() {
	const router = useRouter();

	async function handleProfile() {
		const session = await getSession();
		// redirect to login page if there is no session.
		if (session?.user) {
			router.push('/account'); //TODO account page
		} else {
			router.push('/login');
		}
	}

	return (
		<button className='btn btn-ghost btn-circle' onClick={handleProfile}>
			<CgProfile size={25} />
		</button>
	);
}

export default ProfileButton;
