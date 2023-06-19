export const getArrayWithRangeOfN = (n: number) => {
	const arr = [];
	for (let i = 1; i <= n; i++) {
		arr.push(i);
	}
	return arr;
};

export const getArrayWithRangeFromKToN = (k: number, n: number) => {
	const arr = [];
	for (let i = k; i <= n; i++) {
		arr.push(i);
	}
	return arr;
};
