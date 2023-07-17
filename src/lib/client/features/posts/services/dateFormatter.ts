const monthNames = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];

export const formatDate = (strDate: string) => {
	const [day, month, year] = strDate.split('.').map((dateEl) => Number(dateEl));

	return `${monthNames[month - 1]} ${day}, ${year}`;
};
