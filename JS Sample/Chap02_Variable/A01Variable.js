
console.log('---------------- Variable -----------------');

// 변수는 식별자라고도 한다.
var x = 10;
var y = 10.25;
var str = 'NolBu';

console.log(typeof (x), typeof (y), typeof (str));
console.log('x: ' + x + ' typeof(x): ' + typeof (x));

x = 'Hello';
console.log('x: ' + x + ' typeof(x): ' + typeof (x));

// 기본형 변수 이외의 값은 object로 나온다.
x = new Date();
console.log('x: ' + x + ' typeof(x): ' + typeof (x));

// 변수의 선언 방식
var z = 10;
var a = 1, b = 2, c = 3.5;    // 여러개를 동시에 선언

// 변수의 초기화는 나중에도 가능.
var d;
d = 100;
console.log('d: ' + d + ' typeof(d): ' + typeof (d));

// 호이스팅(먼저 메모리 공간에 올라가는 것. 변수와 함수에서 둘 다 발생됨.)
// var 키워드는 선언한 변수를 재선언해도 에러가 아니다.
// 자바스크립트는 문서를 먼저 읽어서 변수와 함수를 메모리 공간에 올린다.
// 그 후 첫줄부터 실행하기 시작한다.
// var 변수는 초기화 문장을 만날 때 값이 대입된다.
// 이미 정의된 변수가 있으면 덮어쓰기(재정의)한다. (에러 아님)
var d = 'HeungBu';
console.log('d: ' + d + ' typeof(d): ' + typeof (d));

// 없는 변수를 선언하면
// console.log('e' + e + ' typeof(e): ' + typeof (e));

// 메모리에는 변수가 선언되어 있음. 값은 undefined로 초기화 되어 있음.
var f;
console.log('f: ' + f + ' typeof(f): ' + typeof (f));

// 메모리에 이미 정의는 되어있지만 초기화 구문은 아직 실행되지 않음.
console.log('g: ' + g + ' typeof(g): ' + typeof (g));
var g = 10;
console.log('g: ' + g + ' typeof(g): ' + typeof (g));