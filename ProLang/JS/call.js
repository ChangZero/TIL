// call 메서드는 모든 함수에서 사용할 수 있으며, this를 특정값으로 지정할 수 있다.


const mike = {
    name: "Mike",
};

const tom = {
    name: "Tom",
};

function showThisName() {
    console.log(this.name);
}

function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
};

showThisName(); //아무것도 안뜸(undefined)
showThisName.call(mike); // Mike 출력

update.call(mike, 1999, 'singer');
console.log(mike);

update.call(tom, 1999, "teacher");
console.log(tom);

const nums = [3, 10, 1, 6, 4];
const minNum = Math.min(...nums);
const maxNum = Math.max(...nums);

console.log(minNum);
console.log(maxNum);

const minNum1 = Math.min.call(null, ...nums);
const maxNum1 = Math.max.call(null, ...nums);

console.log(minNum1);
console.log(maxNum1);
