import { IoLogOutOutline } from 'react-icons/io5';

export function LoadingUserData() {
	return (
		<>
			<div className='avatar placeholder'>
				<div className='bg-neutral text-neutral-content rounded-full w-24'>
					<span className='text-3xl'>L</span>
				</div>
			</div>
			<div>
				{/*TODO dodać imię do db <div>
							Imię: <span>{currUser.email}</span>
						</div> */}
				<div>
					<span className='font-bold'>
						Email: <span className='font-mono'>loading</span>
					</span>
				</div>
				<div>
					<span className='font-bold'>
						Rola: <span className='font-mono'>loading</span>
					</span>
				</div>
			</div>
		</>
	);
}

export function LoadingLogoutButton() {
	return (
		<button className='btn btn-disabled btn-outline btn-error'>
			<IoLogOutOutline size={25} />
			Wyloguj
		</button>
	);
}
