// arr.reduce()인수로 함수를 받음 (누적계산값, 현재값) => {return  계산값}; 

let userList = [
    { name: "Mike", age: 30 },
    { name: "Tom", age: 10 },
    { name: "Jane", age: 27 },
    { name: "Sue", age: 26 },
    { name: "Harry", age: 42 },
    { name: "Steve", age: 60 },
];

let result1 = userList.reduce((prev, cur) => {
    if (cur.age > 19) {
        prev.push(cur.name);
    }
    return prev;
}, []);

console.log(result1);

let result2 = userList.reduce((prev, cur) => {
    if (cur.age > 19) {
        prev += cur.age;
    }
    return prev
}, 0);

console.log(result2);