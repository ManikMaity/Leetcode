type VNode =
	| string
	| {
			type: string;
			props: {
				[key: string]: any;
				children?: VNode | VNode[];
			};
	  };

function vertualize(node: Node) : any {
	if (node.nodeType === Node.TEXT_NODE && node.textContent?.trim().length !== 0) {
		return node.nodeValue;
	}

	if (node.nodeType === Node.ELEMENT_NODE) {
		const el = node as Element;
		const vObj: VNode = {
			type: el.tagName.toLowerCase(),
			props: {},
		};

		const nAttributes = Array.from(el.attributes);

		nAttributes.forEach((attr) => {
			vObj.props[attr.name] = attr.value;
		});

		const nodeClilds: VNode[] = [];

		for (let i = 0; i < el.childNodes.length; i++){
			const cEle = el.childNodes[i];
			const cObj = vertualize(cEle);
			if(cObj !== null) {
			nodeClilds.push(cObj);
			}
		}
		
		if (nodeClilds.length === 1) {
			vObj.props.children = nodeClilds[0];
		}else {
			vObj.props.children = nodeClilds
		}

		return vObj
	}

	return null;
}


const root = document.createElement("div");

root.innerHTML = `
<div>
 <h1> this is </h1>
 <p className="paragraph"> a <button> button </button> from <a href="https://bfe.dev"><b>BFE</b>.dev</a>
 </p>
</div>;
`;



console.log(vertualize(root.firstElementChild!))
