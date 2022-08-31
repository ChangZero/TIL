let arr = [1, 5, 4, 2, 3];

arr.sort();

console.log(arr);

function fn(a, b) {
    return a - b;
}

arr.sort(fn);

console.log(arr);