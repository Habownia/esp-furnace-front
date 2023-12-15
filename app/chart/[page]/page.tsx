import Chart from '@/components/Chart';
import Pagination from '@/components/Pagination';
import { getData, getDocumentCount } from '@/helpers/dbHelper';
import { useRouter } from 'next/router';

export default async function App({ params }: { params: { page: string } }) {
	const data = await getData(undefined, parseInt(params.page));
	const documentCount = await getDocumentCount();

	return (
		<div className=' flex items-center flex-col gap-5'>
			<Pagination
				elements={Math.ceil(documentCount / 5)}
				currPage={parseInt(params.page)}
			/>

			<Chart
				dataDb={
					// Eliminating warning
					JSON.parse(JSON.stringify(data))
				}
			/>
		</div>
	);
}
