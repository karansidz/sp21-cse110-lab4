for (const value in statistics){
	if ((statistics[value] % 2 == 1) || (value.startsWith("r") == true)){
		console.log(statistics[value]);
	}
}

