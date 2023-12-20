import { FaDatabase } from 'react-icons/fa6';

function HeapCard(props: { heapSize: number }) {
	return (
		<div className='card w-96  bg-base-100 shadow-xl'>
			<div className='card-body h-52 flex items-center justify-between'>
				{/* Name */}
				<h2 className='card-title text-3xl flex-center gap-4'>
					<FaDatabase size={20} />
					Wolny stos
				</h2>

				<div className='text-gray-500'>
					------------------------------
				</div>

				<div>
					<p className='text-center text-xl'>{props.heapSize}b</p>
					<progress
						className='progress w-56'
						value={props.heapSize}
						max='524288'
					/>
				</div>
			</div>
		</div>
	);
}

export default HeapCard;
