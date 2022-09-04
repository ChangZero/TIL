// apply는 함수를 매개변수를 처리하는 방법을 제외하면 call과 완전히 같다.
// call은 일반적인 함수와 마찬가지로 매개변수를 직접 받지만, apply는 매개변수를 배열로 받는다.


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

update.apply(mike, [1999, "singer"]);
update.apply(tom, [1999, "teacher"]);

console.log(mike);
console.log(tom);

const nums = [3, 10, 1, 6, 4];
const minNum = Math.min(...nums);
const maxNum = Math.max(...nums);

console.log(minNum);
console.log(maxNum);

const minNum1 = Math.min.apply(null, nums);
// = Math.min.apply(null, [3,10,1,6,4]) 이때는 this가 필요없어서 null을 입력하였음
const maxNum1 = Math.max.apply(null, nums);

console.log(minNum1);
console.log(maxNum1);
