const data: string[][] = [
	["I", "B", "C", "A", "L", "K", "A"],
	["D", "R", "F", "C", "A", "E", "A"],
	["G", "H", "O", "E", "L", "A", "D"],
];

function findDecodedData(data: string[][]): string {
	let result = "";
	const max_chars = data[0].length;
	const max_arrs = data.length;
	let dir: "UP" | "DOWN" = "DOWN";
	let char = 0,
		arr = 0;

	while (char < max_chars) {
		const val = data[arr][char];
		result += val;
        if (arr === 0){
            dir = "DOWN";
        }

        if (arr === max_arrs - 1) {
            dir = "UP";
        }


		if (dir === "DOWN") {
			arr++;
		} else {
			arr--;
		}

        char++;
	}

	return result;
}


console.log(findDecodedData(data))
