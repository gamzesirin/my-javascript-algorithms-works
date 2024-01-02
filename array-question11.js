const solution = (num) => {
	var factors = []
	let start = 2
	while (num > 2) {
		if (num % start == 0) {
			factors.push(start)
			num = num / start
		} else {
			start++
		}
	}
	return factors
}
console.log(solution(12))
