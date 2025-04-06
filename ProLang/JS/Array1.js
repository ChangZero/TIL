let arr = ["Mike", "Tom", "Jane"];

arr.forEach((name, index) => {
    console.log(index + 1, name);
});

let arr1 = [1, 2, 3, 4, 5];

const result1 = arr1.find((item) => {
    return item % 2 === 0;
});

console.log(result1)

let userList = [
    { name: "Mike", age: 30 },
    { name: "Jane", age: 27 },
    { name: "Tom", age: 10 },
];

const result2 = userList.find((user) => {
    if (user.age < 19) {
        return true;
    }
    return false;
});

console.log(result2);


const result3 = userList.findIndex((user) => {
    if (user.age < 19) {
        return true;
    }
    return false;
});

console.log(result3);

const arr2 = [1, 2, 3, 4, 5, 6];

const result4 = arr2.filter((item) => {
    return item % 2 === 0;
});

console.log(result4);


let newUserList = userList.map((user, index) => {
    return Object.assign({}, user, {
        id: index + 1,
        isAdult: user.age > 19,
    });
});

console.log(newUserList);
console.log(userList);

let arr3 = ["안녕", "나는", "철수야"];

let result5 = arr3.join(" ");

console.log(result5);

const users = "Miks,jane,Tom,Tony";

const result6 = users.split(",");

console.log(result6);

let user = {
    name: "Mike",
    age: 30,
};

let userList2 = ["Mike", "Tom", "Jane"];

console.log(typeof user);
console.log(typeof userList2); // thpeof 명령어로는 객체와 리스트 구별 불가


console.log(Array.isArray(user));
console.log(Array.isArray(userList2));



