export const getParamValueFromRouteIfExists = (route: string, paramName: string) => {
	let foundValue: string | undefined;

	const splitRoute = route.split('/');

	splitRoute.forEach((routePart, index) => {
		if (routePart === paramName) foundValue = splitRoute[index + 1];
	});

	return foundValue;
};
