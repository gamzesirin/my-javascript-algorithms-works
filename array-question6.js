const solution = (arr) => {
	let newArr = [...new Set(arr)]
	return newArr.reduce((a, b) => a + b, 0)
}
console.log(solution([1, 4, 4, 4, 0, 4, 3, 3, 1]))
