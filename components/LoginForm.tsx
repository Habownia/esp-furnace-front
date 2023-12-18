'use client';
import { OPTIONS } from '@/app/api/auth/[...nextauth]/route';
import { Field, Formik, FormikErrors } from 'formik';
import { signIn } from 'next-auth/react';

interface FormValues {
	email: string;
	password: string;
}

const validate = (values: FormValues) => {
	const errors: FormikErrors<FormValues> = {};
	if (!values.email) {
		errors.email = 'Required';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
		errors.email = 'Invalid email address';
	}
	return errors;
};

const handleSubmit = async (
	values: FormValues,
	setIsRegistered: any,
	resetForm: any
) => {
	const res = await fetch(
		`/api/register?email=${values.email}&password=${values.password}`
	);
	const isSucceded = await res.json();

	setIsRegistered(isSucceded.success);

	// resets form if registered
	isSucceded ? resetForm(values) : '';
};

export default function LoginForm() {
	return (
		<Formik
			initialValues={{ email: '', password: '' }}
			validate={validate}
			onSubmit={async (values: FormValues) => {
				//login logic
				const res = await signIn('credentials', {
					redirect: true,
					callbackUrl: '/',
					email: values.email,
					password: values.password,
				});
			}}
		>
			{({ errors, touched, handleSubmit, isSubmitting }) => (
				<form
					onSubmit={handleSubmit}
					className='flex flex-col items-center w-full gap-4'
				>
					<div className='flex flex-col w-full'>
						<div className='label text-xl label-text'>E-mail</div>

						<Field
							name='email'
							type='text'
							className='input input-bordered'
							placeholder='example@example.com'
						/>

						{/* Error message */}
						{errors.email && touched.email && errors.email}
					</div>

					<div className='flex flex-col w-full'>
						<div className='label text-xl label-text'>Hasło</div>

						<Field
							name='password'
							type='password'
							className='input input-bordered'
						/>

						{/* Error message */}
						{errors.password && touched.password && errors.password}
					</div>

					<button
						type='submit'
						className='m-auto btn btn-outline btn-primary'
						disabled={isSubmitting}
					>
						Zaloguj
					</button>
				</form>
			)}
		</Formik>
	);
}
