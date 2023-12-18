'use client';
import { useState } from 'react';

async function addUser() {
	const res = await fetch('/api/register');
	const isSucceded = await res.json();
	return isSucceded;
}

function RegisterPage() {
	const [isSuceeded, setIsSucceded] = useState();
	const addUserHandler = async () => {
		const res = await addUser();
		setIsSucceded(res);
	};
	return (
		<div className='h-[86.5vh] flex flex-col items-center'>
			<div className='lg:w-1/3 flex flex-col items-center'>
				{/* Logo and name */}
				<div></div>
				<h1 className='font-mono text-2xl my-6'>Zarejestruj się</h1>
				<form className='flex flex-col items-center gap-4 w-full'>
					<div className='w-full flex flex-col'>
						<div className='label'>
							<span className='label-text text-xl'>E-mail</span>
						</div>
						<input
							type='text'
							className='input input-bordered'
							placeholder='example@example.com'
						/>
					</div>
					<div className='w-full flex flex-col'>
						<div className='label'>
							<span className='label-text text-xl'>Hasło</span>
						</div>
						<input
							type='password'
							className='input input-bordered'
						/>
					</div>
					<button
						type='button'
						className='btn btn-outline btn-primary m-auto'
						onClick={addUserHandler}
					>
						Zarejestruj
					</button>
				</form>
			</div>
		</div>
	);
}

export default RegisterPage;
