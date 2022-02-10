
console.log('---------------- Array -----------------');

var nolbu = 'NolBu';
var kor = 100;
var eng = 80;
var total = kor + eng;
var avg = total / 2;
console.log(nolbu + '님의 총점은 ' + total + '이고 평균은 ' + avg + '입니다');
console.log(`${nolbu}님의 총점은 ${total}이고 평균은 ${avg}입니다.`);
console.log('');

let onTotal = (kor, eng) => kor + eng;
let onAvg = (total) => total / 2;
let display = (name, total, avg) => `${name}님의 총점은 ${total} / ${avg}`
const hungbu = [90, 80, 0, 0, onTotal, onAvg, display]
hungbu[2] = hungbu[4](hungbu[0], hungbu[1]);
console.log('total: ', hungbu[2]);

const arr = [10, 2, 3, 44, 1111];
console.log(arr);

// 개수가 정해지지 않은 배열 생성(매개변수를 주지 않을 경우)
const arrTwo = new Array();
console.log(arrTwo);

// []를 이용하여 값을 추가한다.
// 배열의 시작은 0부터 시작한다.
arrTwo[0] = 10;
arrTwo[1] = 19;
arrTwo[2] = 123;

// 크기를 정해 배열 생성. 동적으로 배열의 크기가 늘어날 수 있음. (일단 만든다.)
const arrThree = new Array(5);
console.log(arrThree);
arrThree[0] = 10;
arrThree[1] = 100;
arrThree[2] = 1044;
arrThree[3] = 1560;
arrThree[4] = 10778;
arrThree[5] = 104565;
arrThree[6] = 78854;
console.log(arrThree);

// 값의 수정
arrThree[1] = 2345;
console.log(arrThree);

// 배열은 타입을 혼합해서 넣을 수 있다.
const arrFour = [10, 'NolBu', true, undefined, null, function () { return 100; }, new Date()];
console.log(arrFour[0]);
console.log(arrFour[1]);
console.log(arrFour[2]);
console.log(arrFour[3]);
console.log(arrFour[5]());
console.log(arrFour[6]);

