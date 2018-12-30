let arr2 = [1, 5, 12, 4, 3];
let arr3 = [2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr4 = [3, 10, 17];
let arr2sum = arr3sum = arr4sum = 0;

for (let i in arr2) {
    arr2sum += arr2[i];
}

for (let i in arr3) {
    arr3sum += arr3[i];
}
for (let i in arr4) {
    arr4sum += arr4[i];
}
console.log(arr2sum / arr2.length)
console.log(arr3sum / arr3.length)
console.log(arr4sum / arr4.length)