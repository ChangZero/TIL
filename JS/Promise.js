

const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve("OK");
        reject(new Error("err..."));
    }, 1000);
});

console.log("시작");
pr.then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log("끝");
});



//콜백함수로 구현
const f1 = (callback) => {
    setTimeout(function () {
        console.log("1번 주문 완료");
        callback();
    }, 3000);
};

const f2 = (callback) => {
    setTimeout(function () {
        console.log("2번 주문 완료");
        callback();
    }, 3000);
};

const f3 = (callback) => {
    setTimeout(function () {
        console.log("3번 주문 완료");
        callback();
    }, 3000);
};

console.log("시작");
f1(function () {
    f2(function () {
        f3(function () {
            console.log("끝");
        });
    });
});

//Promise함수로 구현
//Promise Chaining
const d1 = (message) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("1번주문완료");
        }, 2000);
    });
};

const d2 = (message) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("2번주문완료");
        }, 2000);
    });
};

const d3 = (message) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("3번주문완료");
        }, 2000);
    });
};

console.log("시작");
// d1().then((res) => d2(res))
//     .then((res) => d3(res))
//     .then((res) => conslog.log(res))
//     .catch(console.log)
//     .finally(() => {
//         console.log("끝");
//     });


//Promise.all
//리스트로 받은 작업들 모두 완료하면 then구문 시작
Promise.all([d1(), d2(), d3()]).then((res) => {
    console.log("모두 완료");
});

