// setTimeout: 일정 시간이 지난 후 함수를 실행
// setInterval: 일정 시간 간격으로 함수를 반복
// clearTimeout: 예정된 일정을 취소시킨다.
function fn() {
    console.log(3)
}
setTimeout(fn, 3000); // 3초마다 함수 실행

// 아래와 같이 써도 동일한 결과 나옴
// setTimeout(function () {
//     console.log(3)
// }, 3000)

const tID = function showName(name) {
    console.log(name);
}

setTimeout(tID, 3000, "Mike");
clearTimeout(tID);

const tId = setInterval(tID, 3000, 'Jane'); // tID 3초마다 반복
clearInterval(tId); //tId 반복 제거


let num = 0;

function connetShowtime() {
    console.log("접속하신지" + num + "초가 지났습니다.");
    if (num >= 5) {
        clearInterval(timeId);
    }
    num++;
}

const timeId = setInterval(connetShowtime, 1000);