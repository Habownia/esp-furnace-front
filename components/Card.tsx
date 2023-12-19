import Image, { StaticImageData } from 'next/image';
import { IoLinkOutline } from 'react-icons/io5';

function Card(props: {
	image: StaticImageData;
	title: string;
	desc: string;
	link: string;
}) {
	return (
		<div className='card w-72 md:w-96 bg-base-100 shadow-xl'>
			<figure>
				<Image src={props.image} alt='esp-8266' placeholder='blur' />
			</figure>
			<div className='card-body'>
				<h2 className='card-title'>{props.title}</h2>
				<p>{props.desc}</p>
				<div className='card-actions justify-end mt-4'>
					<a
						href={props.link}
						className='flex-center btn btn-error btn-outline text-[1.1rem] font-bold'
					>
						<IoLinkOutline size={20} />
						botland
					</a>
				</div>
			</div>
		</div>
	);
}

export default Card;
