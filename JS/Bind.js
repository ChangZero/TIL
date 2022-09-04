// bind 는 함수의 this 값을 영구히 바꿀 수 있다.


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

const updateMike = update.bind(mike);

updateMike(1980, 'police');
console.log(mike);

const user = {
    name: "Mike",
    showName: function () {
        console.log(`hello ${this.name}`)
    }
};

user.showName();

let fn = user.showName;

fn.call(user);
fn.apply(user);

let boundFn = fn.bind(user);

boundFn();