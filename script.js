var isDate = function (input) {
  //   write your code here
	if(input instanceof Date){
		return !isNaN(input.getTime());
	}

	const parseDate = new Date(input);

	return !isNaN(parseDate.getTime());
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));