import { IoLogOutOutline } from 'react-icons/io5';

export function LoadingUserData() {
	return (
		<>
			<div className='avatar placeholder'>
				<div className='bg-neutral text-neutral-content rounded-full w-24 animate-pulse'>
					&nbsp;
				</div>
			</div>
			<div className='w-44 flex flex-col gap-2'>
				{/*TODO dodać imię do db <div>
							Imię: <span>{currUser.email}</span>
						</div> */}
				<div className=' bg-gray-800 rounded-lg animate-pulse'>
					&nbsp;
				</div>
				<div className=' bg-gray-800 rounded-lg animate-pulse'>
					&nbsp;
				</div>
			</div>
		</>
	);
}

export function LoadingLogoutButton() {
	return (
		<button className='btn btn-disabled btn-outline btn-error animate-pulse'>
			<IoLogOutOutline size={25} />
			Wyloguj
		</button>
	);
}
