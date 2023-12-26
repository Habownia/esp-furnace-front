'use client';
import { useEffect, useState } from 'react';
import { getNDataFromEnd } from '@/helpers/dbHelper';
import DashboardLoading from '@/components/loading/DashboardLoading';

// types
import type { SensorData } from '@/types/sensorData';

// react-icons
import { RiDashboard2Line } from 'react-icons/ri';
import DashboardCards from '@/components/DashboardCards';

function Dashboard() {
	const [data, setData] = useState<SensorData[]>();

	useEffect(() => {
		const fetchData = async () => {
			setData(await getNDataFromEnd(2));
		};

		//catches errors
		fetchData().catch(console.error);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className='flex items-center flex-col min-h-screen'>
			<h1 className='flex items-center gap-3 text-5xl mx-10 my-5'>
				<RiDashboard2Line />
				Dashboard
			</h1>
			<div className='flex-center flex-wrap  gap-5 m-10'>
				{data ? (
					<DashboardCards data={JSON.parse(JSON.stringify(data))} />
				) : (
					<DashboardLoading />
				)}
			</div>
		</div>
	);
}

export default Dashboard;
