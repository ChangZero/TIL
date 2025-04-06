const car = {
    wheels: 4,
    drive() {
        console.log("drive..");
    },
};

const bmw = {
    color: "red",
    navigation: 1,
};

const benz = {
    color: "black",
};

const audi = {
    color: "blue",
};

bmw.__proto__ = car;
benz.__proto__ = car;
audi.__proto__ = car;

const x5 = {
    color: "white",
    name: "x5",
};

x5.__proto__ = bmw;