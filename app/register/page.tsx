'use client';
import RegisterForm from '@/components/RegisterForm';
import { useEffect, useState } from 'react';

import { IoMdCloseCircleOutline } from 'react-icons/io';
import { FaRegCheckCircle } from 'react-icons/fa';

//renders alerts after registration
function renderRegister(isRegistered: boolean | undefined) {
	if (isRegistered === true) {
		return (
			<div
				role='alert'
				className='alert alert-success w-1/2 mt-20'
			>
				<FaRegCheckCircle />
				<span>Udało się zarejestrować użytkownika!</span>
			</div>
		);
	} else if (isRegistered === false) {
		return (
			<div
				role='alert'
				className='alert alert-error w-1/2 mt-20'
			>
				<IoMdCloseCircleOutline />
				<span>
					Błąd! nie udało się zarejsetrować. Spróbuj ponownie.
				</span>
			</div>
		);
	}
	return <></>;
}

function RegisterPage() {
	const [isRegistered, setIsRegistered] = useState<boolean>();
	const [registeredElement, setRegisteredElement] = useState<any>();

	console.log(registeredElement);

	useEffect(() => {
		setRegisteredElement(renderRegister(isRegistered));
	}, [isRegistered]);

	return (
		<div className='h-[86.5vh] flex flex-col items-center'>
			<div className='flex flex-col items-center lg:w-1/3'>
				<h1 className='my-6 text-2xl'>Zarejestruj się</h1>

				<RegisterForm setIsRegistered={setIsRegistered} />
			</div>

			{/* alert */}
			{registeredElement}
		</div>
	);
}

export default RegisterPage;
