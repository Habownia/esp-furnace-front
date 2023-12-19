'use server';
import { getData, getDocumentCount } from '@/helpers/dbHelper';

export async function getChartData(page: number, limit: number) {
	const data = await getData(page, limit);
	const documentCount = await getDocumentCount();
	return { data, documentCount };
}
