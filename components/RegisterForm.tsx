'use client';
import { Field, Formik, FormikErrors } from 'formik';

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

const onSubmit = async (values: FormValues) => {
	const res = await fetch(
		`/api/register?email=${values.email}&password=${values.password}`
	);
	const isSucceded = await res.json();
};

export default function RegisterForm() {
	return (
		<Formik
			initialValues={{ email: '', password: '' }}
			validate={validate}
			onSubmit={onSubmit}
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
						Zarejestruj
					</button>
				</form>
			)}
		</Formik>
	);
}
