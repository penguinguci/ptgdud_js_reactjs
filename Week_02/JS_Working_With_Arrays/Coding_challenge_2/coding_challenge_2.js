function calcAverageHumanAge(ages) {
    // tính độ tuổi
    const humanAges = ages.map(dogAge =>
        dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4
    )

    // loại trừ chó dưới 18 tuổi
    const adultDogs = humanAges.filter(humanAge => humanAge >= 18)
    
    // tính tuổi trung bình
    const averageHumanAge = adultDogs.reduce((sum, age) => sum + age, 0) / adultDogs.length

    return averageHumanAge
}

const data1 = [5, 2, 4, 1, 15, 8, 3]
const data2 = [16, 6, 10, 5, 6, 1, 4]

console.log("Độ tuổi trung bình của data 1:", calcAverageHumanAge(data1))
console.log("Độ tuổi trung bình của data 2:", calcAverageHumanAge(data2))