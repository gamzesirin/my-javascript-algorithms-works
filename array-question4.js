//inputtan bir sayı alınacak sayının basamaklarını ayrı ayrı çarp ve topla sonrada çarpımdan toplamı çıkar.

const solution = (num) => {
	let newNum = num.toString().split('').map(Number)
	return newNum.reduce((a, b) => a * b, 1) - newNum.reduce((a, b) => a + b, 0)
}
console.log(solution(434))
