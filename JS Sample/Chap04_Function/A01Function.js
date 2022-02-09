
console.log('---------------- 함수 선언문 -----------------');

// 호이스팅(끌어올림)
// 변수 -> 메모리 확보에 undefined로 초기화된다.
// 함수 -> 메모리 확보가 되고 평가식도 같이 초기화된다.
console.log('Hosting');
console.log(x);
onAdd(100, 200);

var x = 10;
console.log('호스팅 종료');

// 선언문 방식의 함수 선언
// 일반 함수
function onAdd() {
  let x = 10;
  let y = 20;
  // console.log(this);    // global 영역에서 호출된다
  let result = x + y;
  console.log(`${x} + ${y} = ${result}`);
}



// 매개변수가 있는 함수.
function onMin(x, y) {
  console.log('매개변수가 있는 함수');
  let result = 0;
  if (x > y) {
    result = x - y;
    console.log(`${x} - ${y} = ${result}`);
  } else if (x < y) {
    result = y - x;
    console.log(`${y} - ${x} = ${result}`);
  } else {
    result = 0;
    console.log(`${x} - ${y} = ${result}`);
  }
}
onMin(10, 2);
onMin(2, 10);

// 반환값이 있는 함수.
function onMulti(x, y) {
  console.log('반환값이 있는 함수');
  if (typeof (x) !== 'number' || typeof (y) === 'number') {
    return 0;
  } else {
    return x * y;
  }
}
const result = onMulti(10, 2);
const str = onMulti(10, '2');
console.log(result, str);


// 반환값이 없는 함수. => undefined 확인.
function onDiv(x, y) {
  let result = x / y;
  console.log(`${x} / ${y} = ${result}`);
}
const div = onDiv(10, 2);
console.log(div);