export default function dateSort(a: any, b: any) {
	const dateA = new Date(a.toDate).getTime();
	const dateB = new Date(b.toDate).getTime();
	return dateA < dateB ? 1 : -1;
}
