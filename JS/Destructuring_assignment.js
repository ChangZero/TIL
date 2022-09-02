// 구조 분해 할당 구문은 배열아니 객체의 속성을 분해해서 그 값을 변수에 담을 수 있게 하는 표현식
// 배열 구조 분해
let users1 = ['Mike', 'Tom', 'Jane'];

let [user1, user2, user3] = users1;

console.log(user1);
console.log(user2);
console.log(user3);

let str = "Mike-Tom-Jane";

let [u1, u2, u3] = str.split('-');

console.log(u1);
console.log(u2);
console.log(u3);

//배열 구조 분해: 기본값

let [a = 3, b = 4, c = 5] = [1, 2];

console.log(a);
console.log(b);
console.log(c);

// 배열 구조 분해 : 일부 반환값 무시
let [us1, , us2] = ['Mike', 'Tom', 'Jane', 'Tony'];

console.log(us1);
console.log(us2);

let aa = 1;
let bb = 2;

[aa, bb] = [bb, aa]
console.log(aa);
console.log(bb);

//객체 구조 분해
let users2 = { name: 'Mike', age: 30 };
let { name, age } = users2;

console.log(name);
console.log(age);

// 객체 구조 분해: 새로운 변수 이름으로 할당
let { name: userName, age: userAge } = users2

console.log(userName);
console.log(userAge);

// 객체 구조 분해: 기본값

let users3 = {
    name: 'Mike',
    age: 30,
};

let { name1, age1, gender = 'male' } = users3
