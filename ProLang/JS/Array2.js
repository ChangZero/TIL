let arr = [1, 5, 4, 2, 3];

arr.sort();

console.log(arr);

function fn(a, b) {
    return a - b;
}

arr.sort(fn);

console.log(arr);

let arr2 = [1, 2, 3, 4, 5];
let rusult = 0;
const result = arr.reduce((prev, cur) => {
    return prev + cur;
})

console.log(result);