import Chart from '@/components/Chart';
import { getData } from '@/helpers/getData';

export default async function App() {
	const data = await getData();

	return (
		<div>
			

			<Chart
				dataDb={
					// Eliminating warning
					JSON.parse(JSON.stringify(data))
				}
			/>
		</div>
	);
}
