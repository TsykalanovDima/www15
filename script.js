const arr = [1, 2, 3, -1, -2, -3];

function abc(arr) {

	const exampleArr = [];

	if (!arr.length) return "Error" ;

	if (arr.length <= 0) return null
	
	for (i = 0; i <= arr.length - 1; i++) {
		if(arr[i] >= 0) exampleArr.push(arr[i])
	}

	if(exampleArr <= 0) return null

	return exampleArr
	
}



console.log(abc(arr));