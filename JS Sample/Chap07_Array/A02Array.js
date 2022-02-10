
console.log('---------------- Array -----------------');

var ary = [10, 11, 100, 101, 1000, 11, 100];

console.log('---------------- ****Array 추가삭제**** -----------------');
// 배열의 전체 개수
console.log(ary.length);

// 배열 맨 뒤에 값 추가. x는 추가 후 length값 반환
let x = ary.push(20);

// 배열 맨 앞에 값 추가. y는 추가 후 length값 반환
let y = ary.unshift(2345);
console.log(x, y, ary);

// 배열 맨 뒤에 값 삭제. x는 삭제된 값 반환
x = ary.pop();
// 배열 맨 앞에 값 삭제. y는 삭제된 값 반환
y = ary.shift();
console.log(x, y, ary);

console.log('---------------- **splice** -----------------');
// 배열의 중간 값을 수정, 삭제, 추가
// splice(시작번호, 치환갯수, 대치 또는 대입값)
// 시작번호위치(2)에 있는 값부터 치환갯수(1)만큼 대입값(200)을 넣겠다.
// 치환갯수만큼 값을 삭제하고 대입값의 갯수만큼 그 자리에 넣는다.
// x에는 변경되기 전 값들이 배열 형태로 들어간다.
x = ary.splice(2, 1, 200);
console.log(x, ary);

x = ary.splice(3, 2, 234, 300);
console.log(x, ary);

x = ary.splice(3, 2, 777);
console.log(x, ary);

x = ary.splice(3, 1, 555, 889);
console.log(x, ary);

// 삭제는 치환값을 안주면 됨.
x = ary.splice(2, 5);
console.log(x, ary);

ary = [10, 11, 234, 5643, 2343, 512543, 123123];
// 이런 식으로 뒷부분을 삭제하는 방법도 있음.
ary.length = 2;
console.log(ary);

// delete로도 삭제 가능. 값은 삭제되지만 그 값이 사라진 빈자리만 남음. -> length는 그대로
ary = [10, 11, 234, 5643, 2343, 512543, 123123];
delete ary[3];
console.log(ary);
console.log('');

console.log('---------------- slice로 짤라내기 -----------------');

ary = [10, 11, 234, 5643, 2343, 512543, 123123];

// 원본 배열은 그대로 유지된다.
x = ary.slice(3);     // 시작번호부터 끝까지 잘라내기.
console.log(x, ary);

// 3부터 5미만까지
x = ary.slice(3, 5);
console.log(x, ary);

// 인덱스가 -면 뒤에서부터 셈. (0아니고 1부터 센다.)
x = ary.slice(-3);
console.log(x, ary);

x = ary.slice(-5, -3);
console.log(x, ary);
console.log('');

console.log('---------------- join을 이용하여 연결(문자열이 된다.) -----------------');

ary = [10, 11, 234, 5643, 2343, 512543, 123123];
let str = ary.join('-');
console.log(str, typeof (str));

str = ary.join(', ');
console.log(str);
console.log('');

console.log('---------------- ***concat을 이용한 새 배열 생성*** -----------------');
// react에서 많이 사용.
// concat의 매개변수 값들을 추가한 새로운 배열을 리턴해줌.
ary = [10, 11, 234, 5643, 2343, 512543, 123123];
x = ary.concat(200, 300, 456);
// ary = ary.concat(200, 300, 456);    // 갱신하는 법

console.log(ary, x);

console.log('---------------- indexOf로 위치 찾기 -----------------');
ary = [10, 11, 234, 5643, 2343, 512543, 123123];
x = ary.indexOf(11);
console.log(x, ary);

// 앞에서 3번째부터 검색해서 11의 위치를 찾아라.
// 찾는 값이 없으면 -1을 리턴한다.
x = ary.indexOf(11, 3);
console.log(x);

// 뒤에서부터 찾아라. 카운트는 항상 앞에서부터 한다.
x = ary.lastIndexOf(11);
console.log(x);

// 중복 방지
if (ary.indexOf(100) === -1) {
  ary.push(100);
}

// ES6
x = ary.includes(11);
console.log(x);

// 중복 방지
if (!ary.includes(100)) {
  ary.push(100);
}
console.log('');

console.log('---------------- Sort -----------------');

var names = ['NolBu', 'BangJa', 'HungBu'];

let sorted = names.sort();
console.log(sorted);

// sort는 str베이스
ary = [10, 11, 234, 5643, 2343, 512543, 123123];
let sortAry = ary.sort();
console.log(sortAry);

// 콜백 함수(함수 안에 매개변수가 함수가 되는 것)
// 아래는 자바에서 compare 함수를 오버라이딩 하는 것과 같은 행위
ary.sort((x, y) => {
  if (x > y) return 1;
  else if (x < y) return -1;
  else return 0;
});
console.log(sortAry);