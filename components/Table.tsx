//helpers
import { getStringifiedDate, getTimestamp } from '@/helpers/getTime';

//types
import { SensorData } from '@/types/sensorData';

// react-icons
import { GiGasStove } from 'react-icons/gi';
import { FaTemperatureFull } from 'react-icons/fa6';
import { WiSmoke } from 'react-icons/wi';
import { GiCoalWagon } from 'react-icons/gi';
import { MdDateRange } from 'react-icons/md';

export function TableHeaders() {
	return (
		<thead className='text-sm sm:text-base md:text-2xl '>
			<tr className='grid grid-cols-5'>
				<th>
					<div className='flex-center gap-2  text-purple-300'>
						<MdDateRange className='' />
						Data
					</div>
				</th>
				<th className='p-0'>
					<div className='flex-center gap-2 hover:text-red-800'>
						<FaTemperatureFull className='' />
						<span className='hidden lg:inline'>Temperatura</span>
						<span className='lg:hidden'>Temp.</span>
					</div>
				</th>
				<th>
					<div className='flex-center gap-2  hover:text-yellow-400'>
						<GiGasStove />
						LPG
					</div>
				</th>
				<th>
					<div className='flex items-center justify-center gap-2 hover:text-purple-700'>
						<GiCoalWagon />
						CO
					</div>
				</th>
				<th>
					<div className='flex items-center justify-center gap-2 hover:text-blue-500'>
						<WiSmoke />
						Dym
					</div>
				</th>
			</tr>
		</thead>
	);
}

export function TableBody(props: { data: SensorData[] }) {
	const rows = props.data.map((elem: SensorData) => {
		const date = getTimestamp(elem._id.toString());
		const stringifiedDate = getStringifiedDate(date);

		return (
			<tr
				key={elem._id.toString()}
				className='hover text-sm sm:text-base md:text-2xl child-px-0 grid grid-cols-5'
			>
				<th className=' text-purple-200'>{stringifiedDate}</th>
				<td>
					<span className=' font-bold'>{elem.temperature.value}</span>
					°C
				</td>
				<td className=''>
					<span className=' font-bold'>{elem.smoke.value[0]}</span>{' '}
					ppm
				</td>
				<td className=''>
					<span className=' font-bold'>{elem.smoke.value[1]}</span>{' '}
					ppm
				</td>
				<td className=''>
					<span className=' font-bold'>{elem.smoke.value[2]}</span>{' '}
					ppm
				</td>
			</tr>
		);
	});
	return <tbody>{rows}</tbody>;
}
