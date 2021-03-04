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
	return tagArray
}

const appendTags = (tagArray) => {
	const tagContainer = document.getElementById("tagContainer")

	tagArray.forEach(tag => {
		const span = document.createElement("span")
		span.innerHTML = tag
		span.innerHTML += ", "
		span.addEventListener("click", () => {
			filterTag(tag)
		})

		tagContainer.appendChild(span)
	});

	const lastTag = tagContainer.lastChild
	const cleanTag = lastTag.innerHTML.replace(",", "")
	lastTag.innerHTML = cleanTag
}

const filterTag = (tag) => {
	const tagElements = document.getElementsByClassName("tag")
	console.log(tag)

	for (let i = 0; i < tagElements.length; i++) {
		const p = tagElements[i]
		const spanList = p.children
		let match = false

		for (let k = 0; k < spanList.length; k++) {
			const span = spanList[k];
			if (span.innerHTML === tag && match === false) {
				match = true
			}
		}

		if (match === true) {
			p.parentElement.style.display = "block"
		} else {
			p.parentElement.style.display = "none"
		}
	}
}