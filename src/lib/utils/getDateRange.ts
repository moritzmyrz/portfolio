export function getDateRange(fromDate: Date, toDate: Date): string {
	const fromMonth = fromDate.toLocaleString('default', { month: 'long' });
	const toMonth = toDate.toLocaleString('default', { month: 'long' });
	const fromYear = fromDate.getFullYear();
	const toYear = toDate.getFullYear();

	if (!isValidDate(toDate)) {
		return `${fromMonth} ${fromYear} - nå`;
	}

	if (fromYear === toYear && fromMonth === toMonth) {
		return `${fromMonth} ${fromYear}`;
	} else if (fromYear === toYear) {
		return `${fromMonth} - ${toMonth} ${fromYear}`;
	} else {
		return `${fromMonth} ${fromYear} - ${toMonth} ${toYear}`;
	}
}

function isValidDate(date: Date) {
	return new Date(date).toString() !== 'Invalid Date';
}
