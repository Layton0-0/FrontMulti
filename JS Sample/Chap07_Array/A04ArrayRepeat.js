
console.log('---------------- Array 반복 메서드 -----------------');

var ary = [10, 11, 100, 101, 1000];

console.log('---------------- Array for -----------------');
for (let i = 0; i < ary.length; i++) {
  console.log(ary[i]);
};

console.log('---------------- Array foreach -----------------');
// foreach는 리턴값이 없고 map은 리턴값이 있다.
// (에로우 함수 특)한 줄로 기술할 때 => 뒤의 구문이 값이 아니면 실행. 값인 경우만 return을 해준다.
ary.forEach((item, index) => console.log(item, index));
console.log('');

console.log('---------------- ***Array Map -----------------');
// 배열의 값을 foreach와 같이 순차적으로 1개씩 꺼내 콜백함수에 대입해준다.
ary.map((item, index) => console.log(item, index));
console.log('');

// react에서 많이 사용되는 구문
// arrow 함수의 주의점 중 하나(리턴 타입이 객체인 경우 괄호를 하나 더 쳐서 리턴타입이 객체라는 것을 명시해야만 함.)
// 한 줄로 적는다면 리턴값이 객체라 {}를 함수의 시작과 종료로 인식해서 ()로 묶어줄 필요가 있다.
x = ary.map((item, index) => ({ i: index, value: item * 2 }));
console.log(x);

console.log('---------------- ***Array Filter -----------------');
// 걸러내는 작업을 한다. 조건문이 필요. 조건이 true인 요소만 모아서 배열로 리턴한다.
ary = [12, 344, 564, 2342, 663643];
x = ary.filter((item) => {
  if (item % 2 === 0) return true;      // true인 순환 요소의 값이 x배열에 추가된다.
  else return false;
})
console.log(x);

console.log('---------------- Array reduce -----------------');
ary = [1, 10, 100, 1000, 10000];

x = ary.reduce((init, item) => {
  let total = 0;
  total = init + item;
  return total;
}, 0); // 0이 init값. 처음 한번만 실행.
console.log(x);


var names = ['NolBu', 'HungBu', 'BangJa', 'HongGilDong', 'HungBu', 'BangJa',]
x = names.reduce((obj, item) => {
  if (!obj[item]) obj[item] = 1;
  else obj[item] = obj[item] + 1;

  return obj;
}, {});
console.log('');

