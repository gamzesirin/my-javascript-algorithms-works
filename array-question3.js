//inputtan bir n sayısı alınacak alınan bu n sayısının uzunluğunda bir array oluşturulacak ve arrayin elemanları toplamı 0 olacak şekilde random sayılar atanacak.
const solution = (num) => {
	let newArr = []
	if (num % 2 === 1) {
		newArr.push(0)
	}

	for (let i = 1; i < num / 2; i++) {
		newArr.push(i)
		newArr.unshift(-i)
	}
	return newArr
}
console.log(solution(5))
