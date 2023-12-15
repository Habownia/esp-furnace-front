import Chart from '@/components/Chart';
import { getData } from '@/helpers/getData';

async function getNewData(page: number = 1) {
	const limit = 30;
	const data = await getData(limit, (page - 1) * limit);

	return data;
}

export default async function App() {
	let data = await getNewData();

	return (
		<div>
			<div className='join'>
				<button className='join-item btn'>1</button>
				<button className='join-item btn'>2</button>
				<button className='join-item btn btn-disabled'>...</button>
				<button className='join-item btn'>99</button>
				<button className='join-item btn'>100</button>
			</div>

			<Chart
				dataDb={
					// Eliminating warning
					JSON.parse(JSON.stringify(data))
				}
			/>
		</div>
	);
}
