const getTags = () => {
	const tagElements = document.getElementsByClassName("tag")
	let tagArray = []

	for (let i = 0; i < tagElements.length; i++) {
		const p = tagElements[i]
		const spanList = p.children
		for (let k = 0; k < spanList.length; k++) {
			const span = spanList[k];
			tagArray.push(span.innerHTML)
		}
	}

	tagArray = new Set(tagArray)
	console.log(tagArray)
}