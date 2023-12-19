'use client';
import { useEffect, useState } from 'react';

import { getChartData } from '@/helpers/getChartData';

import Chart from '@/components/Chart';
import Pagination from '@/components/Pagination';
import {
	PaginationLoading,
	ChartLoading,
} from '@/components/loading/chartLoading';

import type { chartData } from '@/types/chartData';

const LIMIT = 30;

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
		<div className=' flex items-center flex-col gap-5 min-h-screen bg-zinc-900'>
			{dataDb ? (
				<Pagination
					elements={Math.ceil(dataDb.documentCount / LIMIT)}
					currPage={page}
					setPage={setPage}
				/>
			) : (
				<PaginationLoading />
			)}
			{dataDb ? (
				<Chart
					// Eliminating warning
					dataDb={JSON.parse(JSON.stringify(dataDb.data))}
				/>
			) : (
				<ChartLoading />
			)}
		</div>
	);
}
