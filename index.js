function somaDois(value1, value2){
    const x = value1 + value2;
    return x;
}

console.log(somaDois(2,3));

exports.printMsg = function() {
	console.log("Hello World!");
	return "Hello World!";
}