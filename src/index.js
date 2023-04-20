export const capitalize = (str) => {
	if (str === '') {
		return '';
	}

	const firstChar = str[0].toUpperCase();
	const restSubstr = str.slice(1);
	return `${firstChar}${restSubstr}`;
};