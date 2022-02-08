
console.log('---------------- Casting -----------------');

// 1. 명시적 형 변환(타입 캐스팅)
var x = 10;
console.log("x: " + x + ', typeof(변수명): ' + typeof (x));

var str = String(x);
console.log("str: " + str + ', typeof(변수명): ' + typeof (str));

str = Boolean(x);
console.log("str: " + str + ', typeof(변수명): ' + typeof (str));

x = '10';
str = Number(x);
console.log("str: " + str + ', typeof(변수명): ' + typeof (str));
console.log('');

// global 함수 parseInt, parseFloat를 이용해서 Number 타입으로 변경 가능.

// Number 메서드를 이용
str = x.toString();   // 문자열로 변환(잘 안씀.)
console.log("str: " + str + ', typeof(변수명): ' + typeof (str));

x = 123.456789;
str = x.toFixed(2);     // 소수점 2자리까지만 출력. 3자리에서 반올림 됨.
console.log("str: " + str + ', typeof(변수명): ' + typeof (str));

console.log('');



// 2. 암묵적 타입 변환 (강제 타입 변환)

// 빈 문자열과 연결시켜 문자열로 형 변환(가장 빠르고 편함)
var y = '' + x;
console.log("y: " + y + ', typeof(변수명): ' + typeof (y));

var check = true;
var result = '' + check;
console.log("result: " + result + ', typeof(변수명): ' + typeof (result));

// 뭐랑 더하느냐에 따라 달라짐.
result = check + 10;
console.log("result: " + result + ', typeof(변수명): ' + typeof (result));

// + 이외의 연산자는 연결이 아닌 Number로 연산됨.
result = 10 - '2'
console.log("result: " + result + ', typeof(변수명): ' + typeof (result));

result = 10 * '2'
console.log("result: " + result + ', typeof(변수명): ' + typeof (result));