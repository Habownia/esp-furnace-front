export function PaginationLoading() {
	return (
		<div className='join my-5 animate-pulse'>
			<button className='join-item disabled btn bg-purple-600'>1</button>
			<button className='join-item btn'>2</button>
			<button className='join-item btn'>3</button>
		</div>
	);
}

export function ChartLoading() {
	return (
		<div className=' w-[90vw] h-[90vh] bg-zinc-900 rounded-3xl mb-10 animate-pulse'>
			&nbsp;
		</div>
	);
}
