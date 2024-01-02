//verilen array içindeki negatif sayıların sayısını bulan fonksiyon yazınız.
const solution = (arr) => {
	return arr.map((row) => row.filter((r) => r < 0).length).reduce((a, b) => a + b, 0)
}
console.log(
	solution([
		[-1, 2, -3],
		[-1, 2, 3],
		[1, -2, -3]
	])
)

//yöntem 2

const solution2 = (arr) => {
	let newArray = []
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			if (arr[i][j] < 0) {
				newArray.push(arr[i][j])
			}
		}
	}
	return newArray.length
}
console.log(
	solution2([
		[-1, 2, -3],
		[-1, 2, 3],
		[1, -2, -3]
	])
)
