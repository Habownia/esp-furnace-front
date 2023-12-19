import LogoutButton from '@/components/LogoutButton';
import { getCurrUser } from '@/helpers/currUserHelper';
import { Suspense } from 'react';
import {
	LoadingUserData,
	LoadingLogoutButton,
} from '@/components/loading/accountLoading';

async function Account() {
	const currUser = await getCurrUser();

	return (
		<div className='flex-center flex-col gap-4 min-h-[86.5vh]'>
			<h1 className='text-3xl my-4'>Dane użytkownika:</h1>
			<div className='flex-center gap-4 font-sans text-xl'>
				<Suspense fallback={<LoadingUserData />}>
					<div className='avatar placeholder'>
						<div className='bg-neutral text-neutral-content rounded-full w-24'>
							<span className='text-3xl'>
								{currUser?.email[0].toUpperCase()}
							</span>
						</div>
					</div>
					<div>
						{/* TODO dodać imię do db{' '} */}
						{/* <div>
							Imię: <span>{currUser.email}</span>
						</div> */}
						<div>
							<span className='font-bold'>Email: </span>{' '}
							{currUser.email}
						</div>
						<div>
							<span className='font-bold'>Rola: </span>{' '}
							{currUser.role}
						</div>
					</div>
				</Suspense>
			</div>
			<div className='m-10'>
				<Suspense fallback={<LoadingLogoutButton />}>
					<LogoutButton />
				</Suspense>
			</div>
		</div>
	);
}

export default Account;
