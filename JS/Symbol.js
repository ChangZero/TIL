const a = Symbol() // 유일한 식별자를 만들때 사용한다.유일성이 보장 괄호안에 설명 넣을 수 있음

// Symbol.for(): 전역 심볼
// 1. 하나의 심볼만 보장 받을 수 있음
// 2. 없으면 만들고, 있으면 가져오기 때문
// 3. Symbol함수는 매번 다른 Symbol 값을 생성하지만, Symbol.for 메소드는 하나를 생성한 뒤 키를 통해 같은 Symbol을 공유한다.

const user = {
    name: 'Mike',
    age: 30,

};

const showName = Symbol('show name');

user[showName] = function () {
    console.log(this.name);
};

user[showName]();
for (let key in user) {
    console.log("His " + key + " is" + user[key] + ".");
}
