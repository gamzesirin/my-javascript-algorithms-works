const solution = (arr, num) => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] === num) {
				return [i, j]
			}
		}
	}
}
console.log(solution([2, 7, 11, 15], 9))
