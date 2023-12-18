import { MongoClient, ObjectId } from 'mongodb';

import type { SensorData } from '@/types/sensorData';

export async function getData(page = 1, limit = 30) {
	// setup MongoClient
	const client = await MongoClient.connect(`${process.env.MONGO_URI}`);

	// db, collection name
	const db = client.db(`${process.env.DB_NAME}`);
	const dataCollection = db.collection(`${process.env.COLLECTION_NAME}`);

	// query
	const result = (await dataCollection
		.find()
		.skip((page - 1) * limit)
		.limit(limit)
		.toArray()) as SensorData[];

	// log query result
	console.log(result);

	// close connection
	client.close();

	return result;

	// Dummy Data
	// const RESULT = [
	// 	{
	// 		_id: new ObjectId('657aad1d41089476f5b05e98'),
	// 		temperature: { value: 21.19 },
	// 		freeHeap: 43200,
	// 		smoke: { value: [0.00767, 0.00498, 0.02056] },
	// 	},
	// 	{
	// 		_id: new ObjectId('657aad28469df2e096b8446b'),
	// 		temperature: { value: 21.19 },
	// 		freeHeap: 21616,
	// 		smoke: { value: [0.01156, 0.00897, 0.03228] },
	// 	},
	// 	{
	// 		_id: new ObjectId('657aad2f41089476f5b094b5'),
	// 		temperature: { value: 21.19 },
	// 		freeHeap: 21616,
	// 		smoke: { value: [0.00981, 0.0073, 0.02752] },
	// 	},
	// 	{
	// 		_id: new ObjectId('657aad3a469df2e096b86e1d'),
	// 		temperature: { value: 21.13 },
	// 		freeHeap: 21616,
	// 		smoke: { value: [0.00943, 0.00688, 0.02489] },
	// 	},
	// 	{
	// 		_id: new ObjectId('657aad48b2e73ca19e930533'),
	// 		temperature: { value: 21.13 },
	// 		freeHeap: 21616,
	// 		smoke: { value: [0.00947, 0.00658, 0.02489] },
	// 	},
	// 	{
	// 		_id: new ObjectId('657aad51469df2e096b8b1c8'),
	// 		temperature: { value: 21.13 },
	// 		freeHeap: 21616,
	// 		smoke: { value: [0.00865, 0.00482, 0.02031] },
	// 	},
	// 	{
	// 		_id: new ObjectId('657aad5c41089476f5b11855'),
	// 		temperature: { value: 21.06 },
	// 		freeHeap: 21616,
	// 		smoke: { value: [0.00823, 0.00505, 0.02151] },
	// 	},
	// 	{
	// 		_id: new ObjectId('657aad6441089476f5b13c2d'),
	// 		temperature: { value: 21.06 },
	// 		freeHeap: 21616,
	// 		smoke: { value: [0.00729, 0.00482, 0.01997] },
	// 	},
	// 	{
	// 		_id: new ObjectId('657aad6c469df2e096b93db1'),
	// 		temperature: { value: 21.06 },
	// 		freeHeap: 21616,
	// 		smoke: { value: [0.00699, 0.00437, 0.01884] },
	// 	},
	// 	{
	// 		_id: new ObjectId('65bafa9acb5abd7802e60c8a'),
	// 		temperature: { value: 21 },
	// 		freeHeap: 21616,
	// 		smoke: { value: [0.00718, 0.00469, 0.01932] },
	// 	},
	// ];
	// return RESULT;
}

export async function getDocumentCount() {
	// setup MongoClient
	const client = await MongoClient.connect(`${process.env.MONGO_URI}`);

	// db, collection name
	const db = client.db(`${process.env.DB_NAME}`);
	const dataCollection = db.collection(`${process.env.COLLECTION_NAME}`);

	const result = await dataCollection.countDocuments({});

	client.close();

	return result;
}
