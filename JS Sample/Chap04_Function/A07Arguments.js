
console.log('---------------- Arguments -----------------');

// 함수 내부에서 매개변수를 관리하기 위해 만들어지는 유사 배열이다.
// 자바스크립트는 함수의 매개변수를 체크하지 않는다.
// 배열처럼 관리는 할 수 없지만 참조는 할 수 있다.
function onAdd(x, y) {
  // console.log(arguments);
  let result = 0;

  for (let i = 0; i < arguments.length; i++) {
    let num = Number(arguments[i]);
    // 숫자가 아니니?(isNotaNumber) -> ()의 값이 숫자가 아니면 true
    if (isNaN(num)) {
      continue;
    }
    result += arguments[i];
  }
  console.log(`Arguments Length: ${arguments.length} / Total: ${result}`);
}

onAdd(3, 5, 7);

function onAdd1(x, y) {
  // console.log(arguments);
  let result = 0;

  for (let i = 0; i < arguments.length; i++) {
    let num = Number(arguments[i]);
    // 숫자가 아니니?(isNotaNumber) -> ()의 값이 숫자가 아니면 true
    if (isNaN(num)) {
      continue;
    }
    result += arguments[i];
  }
  console.log(`${x}: ${arguments.length} / Total: ${result}`);
}

onAdd1('합계', 3, 5, 7);

// ES6
// 첫번째 매개변수 이외는 rest라는 배열로 담겨 넘어온다.
function onAdd1(x, y) {
  // console.log(arguments);
  let result = 0;

  for (let i = 0; i < arguments.length; i++) {
    let num = Number(arguments[i]);
    // 숫자가 아니니?(isNotaNumber) -> ()의 값이 숫자가 아니면 true
    if (isNaN(num)) {
      continue;
    }
    result += arguments[i];
  }
  console.log(`${x}: ${arguments.length} / Total: ${result}`);
}

onAdd1('합계', 3, 5, 7);