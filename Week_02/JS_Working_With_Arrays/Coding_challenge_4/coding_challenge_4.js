const dogs = [
    {weight: 22, curFood: 259, owners: ['Alice', 'Bob']},
    {weight: 8, curFood: 200, owners: ['Matilda']},
    {weight: 13, curFood: 275, owners: ['Sarah', 'John']},
    {weight: 32, curFood: 340, owners: ['Michael']}
];

// 1.
dogs.forEach(dog => {
    dog.recommededFood = dog.weight**0.75 * 28
})

// 2. tìm chó và check xem nó ăn nhiều hay ít
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'))
if (sarahDog.curFood > sarahDog.recommededFood*1.1) {
    console.log('Chó của Sarah ăn quá nhiều!')
} else if (sarahDog.curFood < sarahDog.recommededFood*0.9) {
    console.log('Chó của Sarah ăn quá ít!')
} else {
    console.log('Chó của Sarah ăn vừa đủ lượng cần thiết!');
}

// 3.
const ownersEatTooMuch = dogs
    .filter(dog => dog.curFood > dog.recommededFood*1.1)
    .map(dog => dog.owners)

const ownersEatTooLittle = dogs
    .filter(dog => dog.curFood < dog.recommededFood*0.9)
    .map(dog => dog.owners)

// 4.

if(ownersEatTooMuch != '') {
    console.log(`Chó của ${ownersEatTooMuch.join(' và ')} ăn quá nhiều!`);
}

if(ownersEatTooLittle != '') {
    console.log(`Chó của ${ownersEatTooLittle.join(' and ')} ăn quá ít!`);
}

// 5.
const checkChoAnDungKhong = dogs.some(dog => 
    dog.curFood >= dog.recommededFood*0.9 && 
    dog.curFood <= dog.recommededFood * 1.1
)

console.log(checkChoAnDungKhong ? 'Có con chó ăn đúng lượng thức ăn!' : 'Không có con chó nào ăn đúng lượng thức ăn!')

// 6. 
const checkChoAnVuaPhaiKhong = dogs.some(dog => 
    dog.curFood >= dog.recommededFood*0.9 && 
    dog.curFood <= dog.recommededFood * 1.1
)

console.log(checkChoAnVuaPhaiKhong ? 'Có con chó ăn lượng thức ăn vừa phải!' : 'Không có con chó nào ăn lượng thức ăn vừa phải!');

// 7.
const dogsAnVuaPhai = dogs.filter(dog =>
    dog.curFood >= dog.recommededFood*0.9 && 
    dog.curFood <= dog.recommededFood * 1.1
)

console.log(dogsAnVuaPhai);

// 8. sort  tăng dần
const dogsSapXepTheoThucAn = [...dogs].sort((a, b) => a.recommededFood - b.recommededFood)
console.log(dogsSapXepTheoThucAn)