import type { SensorData } from '@/types/sensorData';
import DashboardCard from './DashboardCard';
import HeapCard from './HeapCard';

// react-icons
import { GiGasStove, GiCoalWagon } from 'react-icons/gi';
import { FaTemperatureFull } from 'react-icons/fa6';
import { WiSmoke } from 'react-icons/wi';

function DashboardCards(props: { data: SensorData[] }) {
	const { data } = props;

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
		prev: data[1].smoke.value[1],
	};

	return (
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
	);
}

export default DashboardCards;
