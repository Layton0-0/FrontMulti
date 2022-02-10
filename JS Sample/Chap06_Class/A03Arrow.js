
// 일반적인 함수 선언문
function onAdd() {
  let x = 10;
  let y = 20;
  let result = x + y;
  console.log(`${x} + ${y} = ${result}`);
}

// ES6 Arrow 함수 선언문(자바의 람다식과 같음.)
// 함수 선언문 형태는 Arrow 함수로 정의 안된다.
// 함수 표현식 방식만 Arrow 형태로 기술
const onMin = function () {
  let x = 10;
  let y = 20;
  let result = x - y;
  console.log(`${x} - ${y} = ${result}`);
}

// function을 삭제하고 매개변수지정 () 다음에 =>를 붙인다.
const onMulti = () => {
  let x = 10;
  let y = 20;
  let result = x * y;
  console.log(`${x} * ${y} = ${result}`);
}

onMin(10, 2);
onMulti(3, 5);

// arrow 함수에 반환값 구문 1줄만 존재하는 경우 {}와 return 키워드를 생략하고 한줄에 기술
// return 키워드를 기술하면 에러.
const onDiv = (x, y) => x / y;

// 매개변수가 1개인 경우는 ()를 생략할 수 있다.
const onDouble = x => 2 ** x;

console.log(onDiv(10, 2));
console.log(onDouble(3));

// 활용
let num = [10, 11, 100, 111, 1234];
let total = 0;
