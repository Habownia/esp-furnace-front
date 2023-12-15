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
			position: 'top' as const,
		},
	},
	scales: {
		x: {
			position: 'bottom' as const,
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
			ticks: {
				callback: (value: any) => {
					return value + '°C';
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
					return value + '%';
				},
			},
		},
	},
};

// Returns Date from _id of MongoDB document
function getTimestamp(_id: string): Date {
	const timestamp = _id.toString().substring(0, 8);
	//creates Date from unix timestamp
	const date = new Date(parseInt(timestamp, 16) * 1000);

	return date;
}

// Returns array of objects {_id, date}
function getDayTime(data: SensorData[]) {
	const date = data.map((elem) => {
		return {
			_id: elem._id,
			date: getTimestamp(elem._id.toString()),
		};
	});

	return date;
}

function getLabels(data: SensorData[]) {
	const labels = getDayTime(data).map((elem) => {
		const d = elem.date;

		return `${d.getHours()}:${d.getMinutes()}`;
	});
	return labels;
}

function Chart(props: { dataDb: SensorData[] }) {
	const labels = getLabels(props.dataDb);

	const data = {
		labels,
		datasets: [
			{
				label: 'Temperatura',
				data: labels.map(
					(elem, index) => props.dataDb[index].temperature.value
				),
				borderColor: 'rgb(255, 99, 132)',
				backgroundColor: 'rgba(255, 99, 132, 0.5)',
			},
			{
				label: 'LPG',
				yAxisID: 'y1',
				data: labels.map(
					(elem, index) => props.dataDb[index].smoke.value[1]
				),
				borderColor: 'rgb(53, 162, 235)',
				backgroundColor: 'rgba(53, 162, 235, 0.5)',
			},
		],
	};

	return <Line options={options} data={data} />;
}

export default Chart;
