
console.log('---------------- 함수 표현식 -----------------');

// 변수이므로 undefined가 할당. 함수 형식으로 호출할 수 없음.
// 변수는 값을 만나야 초기화된다.
// console.log(onAdd);  //에러 아님. 프로그램 실행 시 호이스팅 발생해 undefined로 초기화되어있음.
// onAdd();   // 에러 발생. 변수들이 값을 안만나서 함수 호출 불가.

// 함수 표현식. 익명함수를 이용한다. 이름을 붙이면 기명함수라 한다.
// 표현식 방식의 함수 선언(익명함수)
let onAdd = function () {
  let x = 10;
  let y = 20;
  // console.log(this);    // global 영역에서 호출된다
  let result = x + y;
  console.log(`${x} + ${y} = ${result}`);
};
onAdd();
console.log('');



// 표현식 방식의 함수 선언(기명함수)
// 익명함수로 이름을 생략하면 name에 변수 이름으로 자동 지정됨.
// 단, 익명함수에 함수 이름을 지정하면 내부에서만 사용 가능하다.(외부 사용 에러)
let factorial = function (n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(10));


// Function 생성자 함수 이용(거의 안씀)
var onMin = new Function('x', 'y', 'return x - y');
console.log(onMin(10, 2));