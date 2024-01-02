//Verilen dizinin her elemanından kendisinden sonraki elemanı çıkarılarak yeni bir dizi oluşturunuz. Son elemanın yeni diziye eklenmesi gerekmektedir.
const solution = (arr) => {
	return arr.map((_, i) => {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] > arr[j]) {
				arr[i] = arr[i] - arr[j]
				break
			}
		}
		return arr[i]
	})
}
console.log(solution([8, 4, 6, 2, 3]))
