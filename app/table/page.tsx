'use client';
import { useEffect, useState } from 'react';

//helpers
import { getStringifiedDate, getTimestamp } from '@/helpers/getTime';
import { getChartData } from '@/helpers/getChartData';

//components
import Pagination from '@/components/Pagination';
import {
	ChartLoading,
	PaginationLoading,
} from '@/components/loading/chartLoading';
import { TableBody, TableHeaders } from '@/components/Table';

// types
import type { chartData } from '@/types/chartData';

export default function Table() {
	const LIMIT = 30;

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
		<div className='flex-center flex-col bg-zinc-900 flex-shrink'>
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
				<table className='table text-center child-px-0'>
					<TableHeaders />

					<TableBody data={dataDb?.data} />
				</table>
			) : (
				<ChartLoading />
			)}
		</div>
	);
}
