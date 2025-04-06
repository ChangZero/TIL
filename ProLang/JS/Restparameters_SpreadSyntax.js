function add(...numbers) {
    let result = 0;
    numbers.forEach((num) => (result += num));
    console.log(result);
}
add(1, 2, 3);
add(1, 2, 3, 4, 5, 6, 7);

function User(name, age, ...skills) {
    this.name = name;
    this.age = age;
    this.skills = skills;
}

const user1 = new User('Mike', 30, 'html', 'css');
const user2 = new User('Tom', 20, 'JS', 'Readt');
const user3 = new User('Jane', 10, 'English');

console.log(user1);
console.log(user2);
console.log(user3);

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// arr2.reverse().forEach(num => {
//     arr1.unshift(num);
// });

arr1 = [...arr2, ...arr1];
console.log(arr1);

let user = { name: "Mike" };
let info = { age: 30 };
let fe = ["JS", "React"];
let lang = ["Korean", "English"];

// user = Object.assign({},
//     user,
//     info,
//     {
//         skills: []
//     }
// )
// fe.forEach((item) => {
//     user.skills.push(item);
// });
// lang.forEach((item) => {
//     user.skills.push(item);
// });
// console.log(user);

user = {
    ...user,
    ...info,
    skills: [...fe, ...lang],
};

console.log(user);