function checkDogs(dogsJulia, dogsKate) {
    // tạo bản sao nông và xóa mèo
    const dogsCopyAfterUpdate = dogsJulia.slice(1, -2)

    // kết mảng 
    const allDogs = [...dogsCopyAfterUpdate, ...dogsKate]

    allDogs.forEach((age, i) => {
        if (age >= 3) {
            console.log(`Con chó số ${i + 1} đã trưởng thành và ${age} tuổi`)
        } else {
            console.log(`Con chó số ${i + 1} vẫn là chó con 🐶`)
        }
    });
}

const data1Julia = [3, 5, 2, 12, 7]
const data1Kate = [4, 1, 15, 8, 3]

const data2Julia = [9, 16, 6, 8, 3]
const data2Kate = [10, 5, 6, 1, 4]

console.log("Kết quả cho dữ liệu 1:")
checkDogs(data1Julia, data1Kate)

console.log("Kết quả cho dữ liệu 2:");
checkDogs(data2Julia, data2Kate);