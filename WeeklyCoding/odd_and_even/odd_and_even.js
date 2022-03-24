/**
 * 
 * @param {string | array} binaryString 
 * @returns {number}
 */
const countStepsToZero = binaryString => {
	binaryList = binaryString.split('');
	const firstIndex = binaryList.indexOf('1');
	if (firstIndex === -1) {
		return 0;
	}
	
	let count = 1;
	for (let i = firstIndex + 1; i < binaryList.length; i++) {
		count += (binaryList[i] === '1') ? 2 : 1;
	}

	return count;
}

export const run = () => {
	let S='';
	for(let i=0; i<400000; i++) {
		S=S+'1';
	}
	
	console.time();
	console.log(countStepsToZero(S));
	console.timeEnd();
}