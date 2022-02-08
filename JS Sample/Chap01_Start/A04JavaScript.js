// 한줄 주석
/* 
  여러 줄 주석을 사용하는 경우
  이와 같이 사용된다.
 */

// console: 전역 객체(new 없이 사용할 수 있는 객체, static같은 느낌)

// 문자열은 "" 혹은 ''로 묶어 표현한다.
console.log('(괄호) 안의 값을 브라우저의 console 창에 출력해준다.');

var x = 10;
console.log(x);
console.log(''); // 개행

console.warn('경고 메시지가 필요한 경우');
console.error('에러 메시지가 필요한 경우');
console.info('안내 메시지가 필요한 경우');
console.log(''); // 개행

// time 뒤에 오는 '문자열'이 동일해야 한다. (key값으로 예상).
console.time('시간 체크');
for (var i = 0; i < 1000000; i++) { }
console.timeEnd('시간 체크');
console.log('');

// JavaScript 문자열 출력
console.log('Hello' + 'world');
console.log('Hello' + x);

// 문자열은 "", '' 무엇을 사용해도 상관없다.
console.log("hi");

// "", ''를 내부에서 escape 문자 없이 1번만 교차 사용 가능.
console.log("Hello I'm Yoon");
console.log('Hello I"m Yoon');
console.log('');

// 문자열과 +로 연결하면 결과는 문자열이 된다(이어 쓰기).
// 'Hello ' + 10 => 'Hello 10'
// 'Hello 10' + 20 => 'Hello 1020'
console.log('Hello ' + 10 + 20);

// 연산자 우선순위에 의해 ()가 먼저 연산된다.
console.log('Hello ' + (10 + 20));

// 여러 개의 값을 한번에 나누어 출력
// console.log를 여러 번 출력한 것과 동일
// 아래 예제는 3번 console.log를 구현한 것과 동일
console.log('Hello', x, 10);