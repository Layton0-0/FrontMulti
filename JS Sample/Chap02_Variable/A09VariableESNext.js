
console.log('---------------- let, const -----------------');

var nickname = 'NolBu';
var nickname = 'HungBu';            // 재정의 에러 아님(덮어씀)
var A = 'Global';

{
    // { } 범위를 갖지 않는다. if, for, while, switch
    var nickaname = 'BangJa';
}
console.log("nickname: " + nickname);
// console.log(window);

// alert = '100';

// window.alert('Hello World');
console.log('');


// let -> ECMA 2015 (ES6) Explorer 11 이하는 사용 제약이 따른다.
// hosting은 이루어지지만 변수가 저장되는 객체가 다르다.
// let는 TDZ(Template Dead Zone)이라는 영역에 저장된다.
let A1 = 'LET Global';
let alert = 'hello world';
// window.alert('how it works'); -> 정상 실행됨. let변수의 저장소는 TDZ이기 때문에 window를 오염시키지 않는다.

// 값이 변경되는 변수를 선언
let x = 10;

// 1. 선언한 변수를 재선언할 수 없다.
// let x = 20; -> error

// 2. 모든 {} 범위를 갖는다.
let y = 20;
if (true) {
    let y = 'Hello World';
    let z = 100;
    console.log('if block y ', y);
}
// console.log(z); -> error
console.log('global y ', y);

// const -> ES2015
// 상수를 정의. 보통 대문자로 변수명을 기술한다.
const MY_PI = 3.1519;

// MY_PI = 100;
console.log(MY_PI, typeof (MY_PI));