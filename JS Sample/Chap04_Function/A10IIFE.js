
console.log('---------------- Closure -----------------');
// Immediately Invoked Function Expression

// ()의 의미는 먼저 실행해라.
(function () {
  console.log('즉시 실행함수1');
}());     // 가능한 ;을 잊지말고 붙이자. ()가 이어지면 함수 실행명령으로 인식할 수도 있다.

(function () {
  console.log('즉시 실행함수2');
})();

let x = 10;
(function (num) {
  console.log('즉시 실행함수3 ' + num);
})(x);

const result = (function () {
  var x = 10;
  var y = 20;
  var result = 0;
  var alert = '값이 올바르지 않습니다'

  return x;
})();   // 마지막에 ()를 붙여줌으로써 즉시 실행.
console.log(result);

const calc = (function () {
  let name = 'NolBu';
  var x = 10;
  var y = 20;
  var result = 0;
  var alert = '값이 올바르지 않습니다'

  let onAdd = function () {
    result = x + y;
    return result;
  }
  let onMin = function () {
    return x - y;
  }
  let getResult = function () {
    return result;
  }

  return {
    result,
    alert,
    onAdd,
    onMin,
    getResult
  }
})();   // 마지막에 ()를 붙여줌으로써 즉시 실행.

console.log(calc);
calc.onAdd();
console.log(calc.onAdd());
console.log(calc.onMin());
console.log(calc.alert);
// onAdd()를 호출했어도 스코프때문에 외부인 calc에서의 result = 0그대로.
console.log(calc.getResult());


const calc = (function () {
  let name = 'NolBu';
  var x = 10;
  var y = 20;
  var result = 0;
  var alert = '값이 올바르지 않습니다'

  let onAdd = function () {
    result = x + y;
    return result;
  }
  let onMin = function () {
    return x - y;
  }
  let getResult = function () {
    return result;
  }

  let obj = {
    result,
    alert,
    onAdd,
    onMin,
    getResult
  }

  window.myLib = obj;
})();
console.log(myLib);
myLib.onAdd();
console.log(myLib.onAdd());
console.log(myLib.onMin());
console.log(myLib.alert);
// onAdd()를 호출했어도 스코프때문에 외부인 calc에서의 result = 0그대로.
console.log(myLib.getResult());