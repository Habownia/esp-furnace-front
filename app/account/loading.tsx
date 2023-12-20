import {
	LoadingLogoutButton,
	LoadingUserData,
} from '@/components/loading/accountLoading';

function Loading() {
	return (
		<div className='flex-center flex-col gap-4 min-h-[86.5vh]'>
			<h1 className='text-3xl my-4'>Dane użytkownika:</h1>
			<div className='flex-center gap-4 font-sans text-xl'>
				<LoadingUserData />
			</div>
			<div className='m-10'>
				<LoadingLogoutButton />
			</div>
		</div>
	);
}

export default Loading;
