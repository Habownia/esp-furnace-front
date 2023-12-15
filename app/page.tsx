import { MongoClient, ObjectId } from 'mongodb';
import { getData } from '@/helpers/getData';

import type { SensorData } from '@/types/sensorData';

export default async function Home() {
	const data = await getData();
	const elem = data.map((elem: SensorData) => {
		return (
			<div key={elem._id.toString()}>
				<div>Temp: {elem.temperature.value}°C</div>
				<div>LPG: {elem.smoke.value[0]} ppm</div>
				<div>Co: {elem.smoke.value[1]} ppm</div>
				<div>Smoke: {elem.smoke.value[2]} ppm</div>
			</div>
		);
	});
	return <main className='flex gap-3'>{elem}</main>;
}
