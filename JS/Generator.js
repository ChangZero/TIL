// Generator는 함수의 실행을 중간에 멈췄다가 재개할 수 있는 기능
// next(), return(), throw()
// iterable은 1. Symbol.iterator 메서드가 있다. 2. Symbol.iterator는 iterator를 반환해야한다.
// iterator는 1. next 메서드를 가진다. 2. next 메서드는 value와 done 속성을 가진 객체를반환한다. 3. 작업이 끝나면 done은 true가 된다.

function* fn() {
    console.log(1);
    yield 1;
    console.log(2);
    yield 2;
    console.log(3);
    yield 3;
    return "finish";
}

const a = fn();
// a.next()를 통해 yield가 있는대 까지 실행