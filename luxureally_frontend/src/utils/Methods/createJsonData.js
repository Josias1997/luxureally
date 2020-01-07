export const createJsonData = (keys, values) => {
	const data = new FormData();
	for(let i = 0; i < values.length; i++) {
		data.append(keys[i], values[i]);
	}
	return data;
};