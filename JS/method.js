// console.log("Hello");
// const user1 = {
//     name: 'Mike',
//     age: 30

// }

// const cloneUser = Object.assign({}, user1) //객체 병합(복제)

// const user = {
//     name: 'Mike',
//     age: 30
// }
// console.log("Hello");
// console.log(user.age);
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

let n = "name";
let a = "age";

const user = {
    [n]: "Mike",
    [a]: 30,
};

console.log(user);


function makeObj(key, val) {
    return {
        [key]: val
    }
}

const obj = makeObj("성별", "남자");

console.log(obj);

const user2 = Object.assign({}, user)
console.log(user2)
const userKey = Object.keys(user);
console.log(userKey);
const userVal = Object.values(user);
console.log(userVal);
const result = Object.entries(user)
console.log(result);

let arr = [
    ["mon", "월"],
    ["Tue", "화"],
];

const arrResult = Object.fromEntries(arr); // 새로운 객체 생성

console.log(arrResult);