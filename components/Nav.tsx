'use client';
// react-icons
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaMagnifyingGlass, FaTable } from 'react-icons/fa6';
import { FaRegBell, FaChartLine, FaHome } from 'react-icons/fa';

import Link from 'next/link';
import ProfileButton from './ProfileButton';

function Home() {
	// Closing dropdown by clicking a link
	function handleClick() {
		const elem = document.activeElement as HTMLElement;
		if (elem) {
			elem?.blur();
		}
	}

	return (
		<div className='navbar bg-base-100'>
			<div className='navbar-start'>
				<div className='dropdown'>
					<div
						tabIndex={0}
						role='button'
						className='btn btn-ghost btn-circle'
					>
						<RxHamburgerMenu size={22} />
					</div>
					<ul
						tabIndex={0}
						className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
					>
						<li onClick={handleClick}>
							<Link
								href='/'
								className='text-xl hover:bg-purple-700 hover:bg-opacity-50'
							>
								<FaHome />
								Home
							</Link>
						</li>
						<li onClick={handleClick}>
							<Link
								href='/table'
								className='text-xl hover:bg-purple-700 hover:bg-opacity-50'
							>
								<FaTable />
								Tabela
							</Link>
						</li>
						<li onClick={handleClick}>
							<Link
								href='/chart'
								className='text-xl hover:bg-purple-700 hover:bg-opacity-50'
							>
								<FaChartLine />
								Wykresy
							</Link>
						</li>
					</ul>
				</div>
			</div>

			<div className='navbar-center'>
				<Link href='/' className='btn btn-ghost text-xl'>
					esp-furnace
				</Link>
			</div>

			<div className='navbar-end'>
				{/* Magnifying glass */}
				<button className='btn btn-ghost btn-circle'>
					<FaMagnifyingGlass size={18} />
				</button>
				{/* Bell */}
				<button className='btn btn-ghost btn-circle'>
					<div className='indicator'>
						<FaRegBell size={20} />
						<span className='badge badge-xs badge-primary indicator-item'></span>
					</div>
				</button>
				{/* Profile */}
				<ProfileButton />
			</div>
		</div>
	);
}

export default Home;
