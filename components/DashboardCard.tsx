import {
	FaArrowDownLong,
	FaArrowUpLong,
	FaTemperatureHigh,
} from 'react-icons/fa6';
import { IoIosRemoveCircle } from 'react-icons/io';

function DashboardCard(props: {
	curr: number;
	prev: number;
	name: string;
	unit: string;
}) {
	let diffrence = props.curr - props.prev;
	diffrence = parseFloat(diffrence.toFixed(4));

	const color = diffrence > 0 ? 'green' : diffrence < 0 ? 'red' : 'gray';

	const tempMark = (
		<span className='flex items-center gap-1 text-2xl'>
			{diffrence > 0 && (
				<FaArrowUpLong size={20} className=' text-green-600' />
			)}
			{diffrence < 0 && (
				<FaArrowDownLong size={20} className=' text-red-600 ' />
			)}
			{diffrence == 0 && (
				<IoIosRemoveCircle size={20} className=' text-gray-200' />
			)}

			<span className={`text-${color}-600 font-bold`}>
				{diffrence} {props.unit}
			</span>
		</span>
	);

	return (
		<div className='card w-96  bg-base-100 shadow-xl'>
			<div className='card-body h-52 flex items-center justify-between text-center'>
				{/* Name */}
				<h2 className='card-title text-3xl'>
					<FaTemperatureHigh />
					{props.name}
				</h2>

				<div className='text-gray-500'>
					------------------------------
				</div>

				{/* Diffrence */}
				<div className='flex items-center gap-6'>
					<span className='text-3xl'>
						{props.curr} {props.unit}
					</span>
					{tempMark}
				</div>
			</div>
		</div>
	);
}

export default DashboardCard;
