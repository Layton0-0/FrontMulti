
console.log('---------------- Comparison Operator -----------------');

var x = 10;
var y = 3;

var result = x > y;
console.log('x > y => ' + result);

result = x >= y;
console.log('x > y => ' + result);
console.log('');


// 동등 비교
result = x == y;
console.log('x > y => ' + result);

result = x != y;
console.log('x > y => ' + result);
console.log('')

// 일치 비교
// == 값을 자바스크립트 엔진이 자동 형변환을 해준다. 그 다음 같으면 true를 반환함.

// 1 == "1"
// "1" -> Number("1") 후 비교.
// true -> 1로 변환 후 비교, false -> 0으로 변환 후 비교한다.
var x = true;
var y = 1;

result = x == y;
console.log('true == 1 => ' + result);

// === 는 형 변환을 하지 않고 비교한다. (타입이 같은지 여부까지 체크하는 것.)
// true == 1 and boolean == 'string'
result = x === y;
console.log('true === 1 => ' + result);

// 3항 연산자
var name = 'NolBu';
result = (name === 'NolBu') ? '놀부' : '누군지 모름';
console.log(result);