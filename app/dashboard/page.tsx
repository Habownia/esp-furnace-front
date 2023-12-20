import { getNDataFromEnd } from '@/helpers/dbHelper';
import DashboardCard from '@/components/DashboardCard';

import { RiDashboard2Line } from 'react-icons/ri';

async function Dashboard() {
	const data = await getNDataFromEnd(2);
	// console.log(data);

	//  * 0 : LPG in ppm
	//  * 1 : CO in ppm
	//  * 2 : SMOKE in ppm

	const temp = {
		curr: data[0].temperature.value,
		prev: data[1].temperature.value,
	};

	const smoke = {
		curr: data[0].smoke.value[2],
		prev: data[1].smoke.value[2],
	};

	const lpg = {
		curr: data[0].smoke.value[0],
		prev: data[1].smoke.value[0],
	};

	const co = {
		curr: data[0].smoke.value[1],
		prev: data[0].smoke.value[1],
	};

	console.log(data[0].freeHeap);

	return (
		<div className='flex flex-col min-h-screen'>
			<h1 className='flex items-center gap-3 text-5xl mx-10 my-5'>
				<RiDashboard2Line />
				Dashboard
			</h1>
			<div className='flex items-center flex-wrap gap-5 m-10'>
				<DashboardCard
					curr={temp.curr}
					prev={temp.prev}
					name='Temperatura'
					unit='°C'
				/>
				<DashboardCard
					curr={smoke.curr}
					prev={smoke.prev}
					name='Dym'
					unit='ppm'
				/>
				<DashboardCard
					curr={lpg.curr}
					prev={lpg.prev}
					name='LPG'
					unit='ppm'
				/>
				<DashboardCard
					curr={co.curr}
					prev={co.prev}
					name='CO'
					unit='ppm'
				/>
				<div className='card w-96  bg-base-100 shadow-xl'>
					<div className='card-body h-52 flex items-center justify-between'>
						{/* Name */}
						<h2 className='card-title text-3xl'>Wolny stos</h2>

						<div className='text-gray-500'>
							------------------------------
						</div>

						<div>
							<p className='text-center text-xl'>
								{data[0].freeHeap}b
							</p>
							<progress
								className='progress w-56'
								value={data[0].freeHeap}
								max='524288'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
