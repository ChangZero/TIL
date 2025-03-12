//함수
function sum(x, y) {
    return x + y
}

const a = sum(1, 3)
const b = sum(4, 3)

console.log(a)
console.log(b)

// 화살표 함수
const double = function (x) {
    return x * 2
}

const doubleArrow = (x) => x * 2
const Arrow = x => ({ name: "James" })

console.log('doubleArrow', doubleArrow(9));

// IIFE, Immediately-Invoked Function Expression
// 두가지 형식 결과는 같음
(function () {
    console.log(a * 2)
})();

(function () {
    console.log(a * 2)
}());

// 호이스팅(Hoisting)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상, 함수선언을 아래해도 최상단위치 효과



// 타이머 함수 , 시간단위 ms
// setTimeout(함수 ,시간): 일정 시간 후 함수 실행 setTimeout - clearTimeout
// setInterval(함수, 시간): 시간 간격마다 함수 실행 setInterval - clearInterval
// clearTimeout(): 설정된 Timeout 함수를 종료
// clearInterval(): 설정된 Interval 함수를 종료

const timer = setTimeout(() => { 
    console.log("Happy")
}, 3000)

// const h1El = document.querySelector('h1')
// h1El.addEventListener('click', () => {
//     clearTimeout(timer)
// })

// 콜백(callback)
// 함수의 인수로 사용되는 함수

function timeout(cb) {
    setTimeout(() => {
        console.log("Heropy!")
        cb()
    }, 3000)
}

timeout(() => {
    console.log("Done")
})

// 생성자함수(Prototype)
const heropy = {
    firstName: 'Heropy', // 속성
    lastName: 'Park',
    getFullName: function () {  //메소드
        return `${this.firstName} ${this.lastName}`
    }
}
console.log(heropy.getFullName())

function User(first, last) {
    this.firstName = first
    this.lastName = last
}
User.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`
}

const us = new User('Heropy', 'Park')
console.log(us.getFullName())

const uu = {} // 리터럴 방식


// this
// 일반(Normal) 함수는 호출 위치에 따라 this 정의!
// 화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this 정의!

const hh = {
    name: 'Heropy',
    normal: function () {
        console.log(this.name)
    },
    arrow: () => {
        console.log(this.name)
    }
}
hh.normal()
hh.arrow()

const amy = {
    name: 'Amy',
    normal: hh.normal,
    arrow: hh.arrow
}
amy.normal()
amy.arrow()

const timer1 = {
    name: 'Kim',
    timeout: function () {
        setTimeout(() => {
            console.log(this.name)
        }, 2000)
    }
}
timer1.timeout()

// ES6 Classes
class User3{
    constructor(first, last){
        this.firstName = first
        this.lastName = last
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

// 상속
class Vehicle{
    constructor(name, wheel) {
        this.name - name
        this.wheel = wheel
    }
}
const myVehicle = new Vehicle('운송수단', 2)
console.log(myVehicle)
class Bicycle extends Vehicle{
    constructor(name, wheel) {
        super(name, wheel)
    }
}
const myBicycle = new Bicycle('삼천리', 2)
console.log(myBicycle)
class Car extends Vehicle{
    constructor(name, wheel, license) {
        super(name, wheel)
        this.license = license
    }
}
const myCar = new Car('벤츠', 4)
console.log(myCar)
