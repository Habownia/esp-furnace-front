import type { SensorData } from '@/types/sensorData';

// Returns Date from _id of MongoDB document
export function getTimestamp(_id: string): Date {
	const timestamp = _id.toString().substring(0, 8);
	//creates Date from unix timestamp
	const date = new Date(parseInt(timestamp, 16) * 1000);

	return date;
}

// Returns array of objects {_id, date}
export function getDayTime(data: SensorData[]) {
	const date = data.map((elem) => {
		return {
			_id: elem._id,
			date: getTimestamp(elem._id.toString()),
		};
	});

	return date;
}

// returns date in format hh:mm DD/MM
export function getStringifiedDate(date: Date) {
	const addZero = (num: number) => {
		return num >= 10 ? num : `0${num}`;
	};

	const hours = addZero(date.getHours());
	const minutes = addZero(date.getMinutes());
	const day = addZero(date.getDate());
	const month = addZero(date.getMonth());

	return `${hours}:${minutes} ${day}/${month}`;
}
