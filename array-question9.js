const solution = (arr1, arr2) => {
	let arr1Num = Number(arr1.reverse().join(''))
	let arr2Num = Number(arr2.reverse().join(''))
	return arr1Num + arr2Num
}
console.log(solution([2, 4, 3], [5, 6, 4]))
