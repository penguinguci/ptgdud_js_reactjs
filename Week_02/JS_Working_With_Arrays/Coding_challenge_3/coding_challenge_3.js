const calcAverageHumanAge = ages =>
    ages
        .map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
        .filter(humanAge => humanAge >= 18)
        .reduce((sum, age, _, arr) => sum + age / arr.length, 0)

const data1 = [5, 2, 4, 1, 15, 8, 3]
const data2 = [16, 6, 10, 5, 6, 1, 4]

console.log("Độ tuổi trung bình của dữ liệu 1:", calcAverageHumanAge(data1))
console.log("Độ tuổi trung bình của dữ liệu 2:", calcAverageHumanAge(data2))