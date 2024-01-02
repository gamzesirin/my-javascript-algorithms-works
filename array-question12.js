const solution = (num) => {
	var fib = [0, 1]
	if (num <= 2) return 1
	for (let i = 2; i <= num; i++) {
		fib[i] = fib[i - 1] + fib[i - 2]
	}
	return fib[num]
}
console.log(solution(12))
