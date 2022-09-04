// class 는 new 없이 사용하면 에러가 뜬다. 따라서 class 사용하는것을 권장

const User = function (name, age) {
    this.name = name;
    this.age = age;
    this.showName = function () {
        console.log(this.name);
    };
};

const mike = new User("Mike", 30);

class User2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    shiwName() {
        console.log(this.name)
    }
}

const tom = new User2('Tom', 19);

// extends 키워드로 상속 구현 가능
class Car {
    constructor(color) {
        this.color = color;
        this.wheels = 4;
    }
    drive() {
        conseol.log("drive..");
    }
    stop() {
        console.log("STOP!");
    }
}

class Bmw extends Car {
    constructor(color) {
        super(); // 부모 생성자 불러오는 거 필수!
        this.navigation = 1;
    }
    park() {
        console.log("parking!");
    }
}

const z4 = new Bmw("blue");