import LogoutButton from '@/components/LogoutButton';
import { getCurrUser } from '@/helpers/currUserHelper';

async function Account() {
	const currUser = await getCurrUser();

	return (
		<div className='flex flex-col gap-4 items-center justify-center'>
			<h1 className='text-3xl my-4'>Dane użytkownika:</h1>
			<div className='flex items-center justify-center gap-4 font-sans text-xl'>
				<div className='avatar placeholder'>
					<div className='bg-neutral text-neutral-content rounded-full w-24'>
						<span className='text-3xl'>
							{currUser?.email[0].toUpperCase()}
						</span>
					</div>
				</div>
				<div>
					{/*TODO dodać imię do db <div>
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
			</div>
			<div className='m-10'>
				<LogoutButton />
			</div>
		</div>
	);
}

export default Account;
