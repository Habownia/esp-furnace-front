'use client';
import { useEffect, useState } from 'react';

import Chart from '@/components/Chart';
import Pagination from '@/components/Pagination';

import type { SensorData } from '@/types/sensorData';
import { getChartData } from '@/helpers/getChartData';

const LIMIT = 5;

type chartData = {
	data: SensorData[];
	documentCount: number;
};

export default function App() {
	// const documentCount = await getDocumentCount();

	const [page, setPage] = useState<number>(1);
	const [dataDb, setDataDb] = useState<chartData>();

	useEffect(() => {
		const fetchData = async () => {
			setDataDb(await getChartData(page, LIMIT));
		};

		//catches errors
		fetchData().catch(console.error);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [page]);

	return (
		<div className=' flex items-center flex-col gap-5'>
			{dataDb && (
				<Pagination
					elements={Math.ceil(dataDb.documentCount / LIMIT)}
					currPage={page}
					setPage={setPage}
				/>
			)}
			{dataDb && (
				<Chart
					// Eliminating warning
					dataDb={JSON.parse(JSON.stringify(dataDb.data))}
				/>
			)}
		</div>
	);
}
