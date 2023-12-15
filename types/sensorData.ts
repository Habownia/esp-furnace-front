import { ObjectId } from 'mongodb';

export type SensorData = {
	_id: ObjectId;
	temperature: {
		value: number;
	};
	freeHeap: number;
	smoke: {
		value: number[];
	};
};
