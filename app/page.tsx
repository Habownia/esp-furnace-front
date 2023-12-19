import Card from '@/components/Card';

import { FaRegHandPointDown } from 'react-icons/fa';
import { FaFireFlameCurved } from 'react-icons/fa6';
import { IoIosBonfire } from 'react-icons/io';

import esp from '@/images/esp8266-nodemcu-v3.png';
import mq2 from '@/images/MQ2.png';
import ds18b20 from '@/images/DS18B20.png';

function Home() {
	return (
		<div>
			<div className='hero min-h-screen bg-base-200'>
				<div className='hero-content text-center'>
					<div className='max-w-md flex flex-col items-center'>
						<label className='swap swap-flip text-9xl'>
							<input type='checkbox' />

							<div className='swap-on'>
								{' '}
								<IoIosBonfire
									size={140}
									className='mb-6 text-purple-500 hover:text-white ease-in-out duration-300'
								/>
							</div>
							<div className='swap-off'>
								<FaFireFlameCurved
									size={140}
									className='mb-6 text-purple-500 hover:text-white ease-in-out duration-300'
								/>
							</div>
						</label>

						<h1 className='text-5xl font-bold'>esp-furnace</h1>

						<p className='py-6 text-lg'>
							Jest to projekt który umożliwiający zdalne
							monitorowanie jakości powietrza i temperatury za
							pomocą mikrokontrolera{' '}
							<span className='font-bold text-purple-300'>
								ESP8266
							</span>{' '}
							oraz dwóch czujników:
							<span className='font-bold text-purple-300'>
								{' '}
								MQ-2
							</span>{' '}
							(do wykrywania gazów) i{' '}
							<span className='font-bold text-purple-300'>
								DS18B20
							</span>{' '}
							(do pomiaru temperatury)
						</p>

						<a
							className='btn text-purple-500 hover:bg-purple-500 hover:border-none btn-outline rounded-3xl h-16'
							href='#hardware'
						>
							<FaRegHandPointDown size={30} />
						</a>
					</div>
				</div>
			</div>
			<div
				id='hardware'
				className='flex items-center justify-evenly gap-5 flex-wrap py-10'
			>
				<Card
					image={esp}
					title='ESP8266'
					desc='Moduł WiFi ESP8266 + NodeMCU v3 to zaawansowany układ, który jest idealny do różnorodnych zastosowań IoT.'
					link='https://botland.com.pl/moduly-wifi-esp8266/8241-modul-wifi-esp8266-nodemcu-v3-5904422300630.html'
				/>
				<Card
					image={mq2}
					title='MQ-2'
					desc='Moduł z czujnikiem dymu i gazów łatwopalnych MQ-2 z wyprowadzeniami goldpin raster 2,54 mm. Zasilany jest napięciem 5 V.'
					link='https://botland.com.pl/czujniki-gazow/3027-czujnik-dymu-i-latwopalnych-gazow-mq-2-polprzewodnikowy-modul-niebieski-5904422359270.html'
				/>
				<Card
					image={ds18b20}
					title='DS18B20'
					desc='Sonda wodoodporna z cyfrowym czujnikiem temperatury DS18B20+, wyposażonym w interfejs komunikacyjny 1-wire.'
					link='https://botland.com.pl/sondy-wodoodporne/1713-sonda-wodoodporna-z-czujnikiem-temperatury-ds18b20-1m-5903351242226.html'
				/>
			</div>
		</div>
	);
}

export default Home;
