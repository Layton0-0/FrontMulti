
console.log('---------------- 중첩함수, 콜백함수 -----------------');
/*
함수는 일급객체
    1. 리터럴에 의해 생성 가능
    2. 변수나 배열요소, 객체의 프로퍼티로 할당 가능
    3. 함수의 인자나 리턴 값으로 사용 가능
    4. 동적으로 프로퍼티 생성 가능
*/
const arr = [10, 20, function () { return 100; }]
console.log(arr[2]());

const obj = {
    info: function () {
        console.log('hi');
    }
}
console.log(obj.info());

// 중첩함수
function outer() {
    var x = 10;
    console.log('Outer -> ', this);         // 호출이 Global -> Window
    function inner() {
        let y = 20;
        let result = x + y;
        console.log('Inner -> ', this);     // Window
        console.log(`${x} + ${y} = ${result}`);
    }
    inner();
}
outer();
console.dir(outer);
console.log('');

// 리턴 값으로 함수를 이용
function outer2(x) {
    let num = x;
    let name = 'Outer';

    function inner2() {
        return `Inner2 Function = ${num} / ${name}`;
    }
    return inner2;
}
const inner2 = outer2(100);
console.log('inner2 -> ', inner2);
const result = inner2();
console.log(result);


function outer3(x) {
    console.log('outer 함수 호출', x);

}

var inner = outer3(10);




// 함수의 인자나 리턴 값이 될 수 있다.


