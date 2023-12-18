import RegisterForm from '@/components/RegisterForm';

function RegisterPage() {
	return (
		<div className='h-[86.5vh] flex flex-col items-center'>
			<div className='flex flex-col items-center lg:w-1/3'>
				<h1 className='my-6 font-mono text-2xl'>Zarejestruj się</h1>

				<RegisterForm />
			</div>
		</div>
	);
}

export default RegisterPage;
