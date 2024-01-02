let output = []
let num = 1
const solution = () => {
	if (num % 3 == 0 && num % 5 == 0) {
		output.push('FizzBuzz')
	} else if (num % 3 == 0) {
		output.push('Fizz')
	} else if (num % 5 == 0) {
		output.push('Buzz')
	} else {
		output.push(num)
	}
	num++
	if (num <= 100) {
		solution()
	}
}
console.log(solution())
console.log(output)
