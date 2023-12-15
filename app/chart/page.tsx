'use client';
import { useRouter } from 'next/navigation';

export default function App() {
	const router = useRouter();
	router.push('/chart/1');

	return <div></div>;
}
