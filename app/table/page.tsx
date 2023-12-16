import { getData } from '@/helpers/dbHelper';
import { getTimestamp } from '@/helpers/getTime';

import { GiGasStove } from 'react-icons/gi';
import { FaTemperatureFull } from 'react-icons/fa6';
import { WiSmoke } from 'react-icons/wi';
import { GiCoalWagon } from 'react-icons/gi';
import { MdDateRange } from 'react-icons/md';

import type { SensorData } from '@/types/sensorData';

export default async function Table() {
	const data = await getData();
	const elem = data.map((elem: SensorData) => {
		const date = getTimestamp(elem._id.toString());
		const dateStrigified = `${date.getHours()}:${date.getMinutes()} ${date.getDate()}/${date.getMonth()}`;

		return (
			<tr key={elem._id.toString()} className='hover'>
				<th className='text-xl text-purple-200'>{dateStrigified}</th>
				<td className='text-xl'>
					<span className='text-2xl font-bold'>{elem.temperature.value}</span>
					°C
				</td>
				<td className='text-xl'>
					<span className='text-2xl font-bold'>{elem.smoke.value[0]}</span> ppm
				</td>
				<td className='text-xl'>
					<span className='text-2xl font-bold'>{elem.smoke.value[1]}</span> ppm
				</td>
				<td className='text-xl'>
					<span className='text-2xl font-bold'>{elem.smoke.value[2]}</span> ppm
				</td>
			</tr>
		);
	});
	return (
		<div className='flex h-screen bg-zinc-900 font-mono'>
			<table className='table text-center'>
				<thead>
					<tr>
						<th>
							<div className='flex items-center justify-center gap-2 text-xl text-purple-300'>
								<MdDateRange className='' />
								Data
							</div>
						</th>
						<th>
							<div className='flex items-center justify-center gap-2 text-xl hover:text-red-800'>
								<FaTemperatureFull className='' />
								Temperatura
							</div>
						</th>
						<th>
							<div className='flex items-center justify-center gap-2 text-xl hover:text-yellow-400'>
								<GiGasStove />
								LPG
							</div>
						</th>
						<th>
							<div className='flex items-center justify-center gap-2 text-xl hover:text-purple-700'>
								<GiCoalWagon />
								CO
							</div>
						</th>
						<th>
							<div className='flex items-center justify-center gap-2 text-xl hover:text-blue-500'>
								<WiSmoke />
								Dym
							</div>
						</th>
					</tr>
				</thead>
				<tbody>{elem}</tbody>
			</table>
		</div>
	);
}
