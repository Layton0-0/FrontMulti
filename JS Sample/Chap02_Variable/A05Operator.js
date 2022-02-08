
console.log('---------------- Logical Operator -----------------');

var x = 10;
var y = 5;
var z = 5;
var result;

result = (x > y) && (x > z);
console.log('(x > y) && (x > z) => ' + result);

// && 연산자는 앞이 거짓이면 뒤의 연산은 진행하지 않음.
// 그래서 z값이 5인 것.
// || 연산자는 앞이 참이면 뒤를 체크하지 않음.
result = (x < y) && (x < z++);
console.log(result, z);

// 연산자로 사용.
var age;

// 0, -0, '', NaN, null, undefined: false
if (age) {
  console.log('True');
} else {
  console.log('False');
}

// typeof 함수를 지원하면 참.
if (typeof (10)) {
  console.log('True');
} else {
  console.log('False');
}

// &&, ||를 연산자로 사용
// 앞의 값(age)이 존재하면 앞의 값(age)을 result에 대입.
// 존재하지 않는 경우 뒤의 값(10)을 확인. 뒤의 값(10)이 존재하면 그 값을 result에 대입.
var result = age || 10;
console.log('|| case: ', result);

// 앞의 값(age)이 존재하면 뒤의 값(10)을 확인. 뒤의 값(10)이 존재하면 그 값을 result에 대입.
// 존재하지 않는 경우 앞의 값(age)을 result에 대입.
var result = age && 10;
console.log('&& case: ', result);

// react
// age = 10;
console.log(age && '<div>Hello World</div>');

// ** -> ES7(ECMA 2016)
var two = 2;
result = two ** 3; // 2 * 2 * 2
console.log(result);
console.log('');

// boolean 값으로 변환 '!!'
console.log(!0);
console.log(!!10);
console.log(!!'');
console.log(!!'A');
console.log(!!undefined);
console.log(!!null);