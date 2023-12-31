export function PaginationLoading() {
	return (
		<div className='join my-5 animate-pulse'>
			<button className='join-item btn disabled'>1</button>
			<button className='join-item btn disabled'>2</button>
			<button className='join-item btn disabled'>3</button>
		</div>
	);
}

export function ChartLoading() {
	return (
		<div className=' w-[90vw] h-[90vh] bg-zinc-800 rounded-3xl mb-10 animate-pulse'>
			&nbsp;
		</div>
	);
}
