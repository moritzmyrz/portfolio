export function groupProjectsByYear(objects: { toDate: string }[]) {
	const groups: any = {};

	objects.forEach((obj) => {
		const year = new Date(obj.toDate).getFullYear();

		if (!obj.toDate) {
			if (!groups['now']) {
				groups['now'] = [obj];
				return;
			} else {
				groups['now'].push(obj);
				return;
			}
		}

		if (!groups[year]) {
			groups[year] = [obj];
			return;
		} else {
			groups[year].push(obj);
			return;
		}
	});

	return groups;
}
