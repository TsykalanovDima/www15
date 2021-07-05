const arr = [1, 2, 3, -1, -2, -3];

function name(av) {

	const exampleArr = [];

	if (!av.length) return "Error" ;

	for (i = 0;i <= av.length - 1; i++) {
		if(av[i] >= 0) exampleArr.push(av[i])
	}

	if (av.length <= 0) return null
	
	return exampleArr
	
}



console.log(name (arr));