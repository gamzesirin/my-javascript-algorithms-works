const solution = (arr, num) => {
	let newArr = []
	for (let i = 0; i < num; i++) {
		newArr.push(arr[i])
		newArr.push(arr[i + num])
	}
	return newArr
}
console.log(solution([1, 2, 3, 4, 4, 3, 2, 1], 4))
