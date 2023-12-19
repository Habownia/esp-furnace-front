'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction, useEffect } from 'react';

function Pagination(props: {
	elements: number;
	currPage: number;
	setPage: Dispatch<SetStateAction<number>>;
}) {
	const { elements, currPage } = props;

	const router = useRouter();
	useEffect(() => {
		if (currPage > elements || currPage < 1) {
			router.push('/404');
		}
	});

	return (
		<div className='join my-5'>
			{currPage >= 2 && (
				<button
					onClick={() => props.setPage(1)}
					// href={'/chart/1'}
					// replace={true}
					className='join-item btn'
				>
					1
				</button>
			)}

			{currPage >= 3 && (
				<button
					onClick={() => props.setPage(currPage - 1)}
					// href={`/chart/${currPage - 1}`}
					// replace={true}
					className='join-item btn'
				>
					«
				</button>
			)}

			<button className='join-item btn bg-purple-600'>{currPage}</button>

			{currPage <= elements - 2 && (
				<button
					onClick={() => props.setPage(currPage + 1)}
					// href={`/chart/${currPage + 1}`}
					// replace={true}
					className='join-item btn'
				>
					»
				</button>
			)}
			{currPage <= elements - 1 && (
				<button
					onClick={() => props.setPage(elements)}
					// href={`/chart/${elements}`}
					// replace={true}
					className='join-item btn'
				>
					{elements}
				</button>
			)}
		</div>
	);
}

export default Pagination;
