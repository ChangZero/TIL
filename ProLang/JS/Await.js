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

console.log('시작');
async function order() {
    try {
        const result1 = await d1();
        const result2 = await d2(result1);
        const result3 = await d3(result2);
        console.log(result3);
    } catch (e) {
        console.log(e);
    }
    console.log('종료');
};

order();