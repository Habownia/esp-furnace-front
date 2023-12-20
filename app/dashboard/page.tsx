import { getNDataFromEnd } from '@/helpers/dbHelper';
import DashboardCard from '@/components/DashboardCard';
import DashboardLoading from '@/components/loading/DashboardLoading';

import { RiDashboard2Line } from 'react-icons/ri';

import { GiGasStove, GiCoalWagon } from 'react-icons/gi';
import { FaTemperatureFull } from 'react-icons/fa6';
import { WiSmoke } from 'react-icons/wi';
import HeapCard from '@/components/HeapCard';

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

	return (
		<div className='flex items-center flex-col min-h-screen'>
			<h1 className='flex items-center gap-3 text-5xl mx-10 my-5'>
				<RiDashboard2Line />
				Dashboard
			</h1>
			<div className='flex-center flex-wrap  gap-5 m-10'>
				{data ? (
					<>
						<DashboardCard
							name='Temperatura'
							curr={temp.curr}
							prev={temp.prev}
							Icon={FaTemperatureFull}
							unit='°C'
						/>
						<DashboardCard
							name='Dym'
							curr={smoke.curr}
							prev={smoke.prev}
							Icon={WiSmoke}
							unit='ppm'
						/>
						<DashboardCard
							name='LPG'
							curr={lpg.curr}
							prev={lpg.prev}
							Icon={GiGasStove}
							unit='ppm'
						/>
						<DashboardCard
							name='CO'
							curr={co.curr}
							prev={co.prev}
							Icon={GiCoalWagon}
							unit='ppm'
						/>
						<HeapCard heapSize={data[0].freeHeap} />
					</>
				) : (
					<DashboardLoading />
				)}
			</div>
		</div>
	);
}

export default Dashboard;
