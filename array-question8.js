const solution = (num) => {
	let pnum = Number(num.toString().split('').reverse().join(''))
	let nnum = Number(
		num
			.toString()
			.split('')
			.filter((r) => r != '-')
			.reverse()
			.join('')
	)
	return num < 0 ? -1 * nnum : pnum
}
console.log(solution(-120))
