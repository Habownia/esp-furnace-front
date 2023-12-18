import LoginForm from '@/components/LoginForm';

function RegisterPage() {
	return (
		<div className='h-[86.5vh] flex flex-col items-center'>
			<div className='flex flex-col items-center lg:w-1/3'>
				<h1 className='my-6 text-2xl'>Zaloguj się</h1>

				<LoginForm />
			</div>
		</div>
	);
}

export default RegisterPage;
