// Closure란 함수화 Lexical Environment의 조합
// 함수가 생성될 당시의 외부 변수를 기억 생성 이후에도 계속 접근 가능

function makeAdder(x) {
    return function (y) {
        return x + y;
    }
}

const add3 = makeAdder(3);
console.log(add3(2)); // add3함수가 생성된 이후애도 상위함수인 makeAdder 의 x 에 접근 가능

const add10 = makeAdder(10);
console.log(add10(5));
console.log(add3(1));


function makeCounter() {
    let num = 0; // 은닉화

    return function () {
        return num++;
    };
}

let counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2 