import convertUnits from 'convert-units';

export const convertUnitsTemp = (temp, before, after, decimals = 0) => {
	return Number(convertUnits(temp).from(before).to(after).toFixed(decimals));
};
