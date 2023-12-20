function DashboardLoading() {
	// blank div which pulsates
	const loadingElem = (
		<div className='dashboard-card-cont animate-pulse'>
			<div className='card-body h-52 flex items-center justify-between'>
				&nbsp;
			</div>
		</div>
	);

	// array of blank loading divs
	let elems: JSX.Element[] = [];

	// creates 5 elements
	for (let i = 0; i < 5; i++) {
		elems[i] = loadingElem;
	}

	return <>{elems}</>;
}

export default DashboardLoading;
