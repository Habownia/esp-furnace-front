'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

function Pagination(props: { elements: number; currPage: number }) {
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
				<Link href={'/chart/1'} className='join-item btn'>
					1
				</Link>
			)}

			{currPage >= 3 && (
				<Link href={`/chart/${currPage - 1}`} className='join-item btn'>
					«
				</Link>
			)}

			<button className='join-item btn bg-purple-600'>{currPage}</button>

			{currPage <= elements - 2 && (
				<Link href={`/chart/${currPage + 1}`} className='join-item btn'>
					»
				</Link>
			)}
			{currPage <= elements - 1 && (
				<Link href={`/chart/${elements}`} className='join-item btn'>
					{elements}
				</Link>
			)}
		</div>
	);
}

export default Pagination;
