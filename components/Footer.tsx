import { FaGithub } from 'react-icons/fa';

function Footer() {
	return (
		<footer className=' footer footer-center p-4 bg-base-300 font-mono text-base-content'>
			<p className='flex items-center'>
				Copyright © 2023 - All right reserved by{' '}
				<a
					href='https://github.com/Habownia/'
					className='flex items-center gap-1  text-xl hover:text-purple-300 hover:bg-opacity-70 ease-in-out duration-300'
				>
					<FaGithub size={20} />
					habownia
				</a>
			</p>
		</footer>
	);
}

export default Footer;
