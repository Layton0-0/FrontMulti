
console.log('---------------- Operator -----------------');

var x = 10;
var y = 3;

// 이항 산술 연산자
var result = x + y;
console.log(x + ' + ' + y + ' = ' + result);

result = x - y;
console.log(x + ' - ' + y + ' = ' + result);

result = x * y;
console.log(x + ' * ' + y + ' = ' + result);

result = x / y;
console.log(x + ' / ' + y + ' = ' + result);

result = x % y;
console.log(x + ' % ' + y + ' = ' + result);
console.log('');


// 단항 산술 연산자. ++, --
// 앞에 붙으면 먼저 변화시키고 줄 넘김. 뒤에 붙으면 줄 넘기고 변화시킴.
var z = 10;
z++;
console.log(z);

++z;
console.log(z);

z = 10;
var result = ++z;
console.log(z, result);

z = 10;
result = z++;
console.log(z, result);

x = 10;
y = 20;
result = ++x + y++;
console.log(x, y, result);

// 할당 연산자. += -= *= /= %=
x = 10;
x = x + 3;
x += 3;

// Math

// 0 ~ 0.9999999999 까지의 난수 발생
console.log(Math.random());

// 무조건 올림
console.log(Math.ceil(10.0000000001));

// 무조건 버림
console.log(Math.floor(5.9999999999));

// 숫자 관련 전역 함수
var random = Math.random() * 5;
console.log('랜덤숫자: ' + random);
console.log(parseInt(random)); // 정수 값만 리턴
console.log(parseFloat(random)); // 플로트 형태로 리턴

// 1 ~ 5 까지의 숫자 랜덤 뽑기
random = Math.ceil(Math.random() * 5);
console.log('1~5 ranNum: ', random);

random = Math.floor(Math.random() * 5 + 1);
console.log('floor value: ', random);


// 문자열을 숫자로 변환해준다. 문자가 포함되었으면 문자 전까지만 리턴.
// 시작이 문자면 리턴값이 NaN(Not a Number).
// Number()는 문자가 포함되어 있으면 변환되지 않음.
var str = '10.25a';
console.log(parseInt(str) + 10, parseFloat(str) + 10, Number(str));

// 문자가 없으면 Number도 변환됨.
str = '10.25';
console.log(parseInt(str) + 10, parseFloat(str) + 10, Number(str) + 10);

// 빈 문자열의 경우 parseInt, parseFloat -> NaN
// Number -> 0으로 치환해준다. (ex] form 입력값이 비어서 넘어오는 경우)
str = '10.25';
console.log(parseInt(str) + 10, parseFloat(str) + 10, Number(str) + 10);