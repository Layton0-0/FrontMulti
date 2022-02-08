
console.log('---------------- Object -----------------');

let nolbu = 'NolBu';
let kor = 100;
let eng = 80;
let total = kor + eng;
let avg = total / 2;
console.log(nolbu + '님의 총점은 ' + total + '이고 평균은 ' + avg + '입니다');
console.log(`${nolbu}님의 총점은 ${total}이고 평균은 ${avg}입니다.`);
console.log('');

// 객체 Object를 이용하여 하나의 이름으로 묶자.
let hungBu = new Object();
hungBu.name = '흥부';
hungBu.kor = 100;
hungBu.eng = 70;
hungBu.total = hungBu.kor + hungBu.eng;
hungBu.avg = hungBu.total / 2;
console.log(`${hungBu.name}님의 총점은 ${hungBu.total} / ${hungBu.avg}`);

// new Object()를 {}로 변경해서 묶을 수 있다.
// 함수 이외의 { } 영역의 this는 window
const hyangDan = {
  name: '향단',
  kor: 100,
  eng: 80,
  // this는 window
  total: this.kor + this.eng, // function 안에 넣지 않으면 this는 전역 변수로 인지. 그래서 여기서 this는 향단이 아님.
  avg: this.total / 2,             // 마지막 ,는 es6부터는 다음이 없어도 에러가 아님. 이전에는 에러였다.
}
// 함수가 global 영역에서 선언되었으므로 this는 window
function MongRyong() {
  this.name = 'MongRyong';
  this.kor = 120;
  this.eng = 150;
  this.total = this.kor + this.eng;
  avg = this.total / 2;
}
console.log(hungBu);
console.log(hyangDan);
console.log(MongRyong.name);

console.dir(hungBu);
console.dir(hyangDan);
console.dir(MongRyong);

// Object는 key: value 쌍의 집합이다.
// key는 JavaScript의 변수 명명 규칙에 따른다.
// 그렇지 않은 경우에는 이름을 문자열로 바꾼다.
// key가 number면 문자열로 자동 치환한다.
// 문자열의 key값은 "객체명[문자열]" 형태로 참조한다.
const bangJa = {
  name: '방자',
  'bangja-kor': 100,
  'bangja-eng': 50,
  // 100: this.bangja - kor + this.bangja - eng,
  100: 150,
  // avg: this.100
}

console.log(bangJa);
// console.log(bangJa.bangja-kor);   // NaN
console.log(bangJa["bangja-kor"]);
console.log(bangJa['100']);

const hong = {
  name: '홍길동',
  kor: 100,
  eng: 90,
  // 객체 내부에서 객체의 프로퍼티값을 참조하는 함수를 메서드라고 한다.
  total: function () {
    return this.kor + this.eng;
  },
  avg: function (num) {
    return this.total() / num;
  }
}

console.log(hong);
console.log(hong.total());
console.log(hong.avg(2));