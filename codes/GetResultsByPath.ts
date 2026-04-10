interface ParseItem {
	type: "key" | "index";
	value: string | number;
}

function getResultByPath(path: string, obj: any) {
	function parsePath(path: string) {
		const result: ParseItem[] = [];
		let temp: string = "";

		for (let i = 0; i <= path.length; i++) {
			let char = path[i];
			// if dot
			if (char === ".") {
				if (temp.trim().length > 0) {
					result.push({
						value: temp,
						type: "key",
					});
					temp = "";
				}
			}

			// if [
			else if (char === "[") {
				if (temp.trim().length > 0) {
					result.push({
						value: temp,
						type: "key",
					});
					temp = "";
				}
			}

			// if ]
			else if (char === "]") {
				if (temp.trim().length > 0) {
					result.push({
						value: Number(temp),
						type: "index",
					});
					temp = "";
				}
			}

			// else
			else {
				if (temp && i == path.length - 1) {
					temp += char;
					result.push({
						value: temp,
						type: "key",
					});
				} else {
					temp += char;
				}
			}
		}

		return result;
	}

	const tokens = parsePath(path);

	let rData: any = obj;

	for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];

        if (token.type === "key")  {
            const path = token.value;
            rData = rData[path];
        }

        else if (token.type === "index") {
            const idx = token.value as number;
            rData = rData[idx]
        }
    }

    return rData;
}


const path = "data.results[1].status[0].type"
const obj1 = {
	data: {
		results: [
			{
				status: "completed",
				error: "",
			},
			{
				status: [{ type: "done" }, { type: "start" }],
				error: "",
			},
		],
	},
};



console.log(getResultByPath(path, obj1))
