'use client';

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

import { SensorData } from '@/types/sensorData';
import { getDayTime } from '@/helpers/getTime';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: 'bottom' as const,
		},
	},
	scales: {
		x: {
			position: 'top' as const,
			title: {
				display: true,
				text: 'Godzina',
			},
			stacked: true,
		},
		y: {
			title: {
				display: true,
				text: 'Temperatura',
			},
			stacked: true,
			max: 70,
			min: 0,
			ticks: {
				stepSize: 5,
				callback: (value: any) => {
					// Usuwa niepotrzebne zera z końca
					return value.toFixed(4).replace(/0+$/, '') + '°C';
				},
			},
		},
		y1: {
			position: 'right' as const,
			title: {
				display: true,
				text: 'LPG',
			},
			stacked: true,
			ticks: {
				// stepSize: 0.1,
				callback: (value: any) => {
					// Usuwa niepotrzebne zera z końca
					return value.toFixed(4).replace(/0+$/, '') + ' ppm';
				},
			},
		},
	},
};

function Chart(props: { dataDb: SensorData[] }) {
	const dates = getDayTime(props.dataDb);

	const data = {
		labels: dates.map(
			(elem) => `${elem.date.getHours()}:${elem.date.getMinutes()}`
		),
		datasets: [
			{
				label: 'Temperatura',
				data: dates.map(
					(_elem, index) => props.dataDb[index].temperature.value
				),
				borderColor: 'rgb(255, 99, 132)',
				backgroundColor: 'rgba(255, 99, 132, 0.5)',
			},
			{
				label: 'Dym',
				yAxisID: 'y1',
				data: dates.map((_elem, index) => props.dataDb[index].smoke.value[2]),
				borderColor: 'rgb(53, 162, 235)',
				backgroundColor: 'rgba(53, 162, 235, 0.5)',
			},
		],
	};

	return <Line options={options} data={data} />;
}

export default Chart;
