// array map filter find findindex위주로 공부.
console.log('---------------- Number -----------------');
var str = '123.56';
let x1 = parseInt(str);     // 123(number)
let x2 = parseFloat(str);   // 123.56(number)
let x3 = Number(str);    // 123.56(Number)

console.log(x1, typeof (x1));
console.log(x2, typeof (x2));
console.log(x3, typeof (x3));

let num = 12345.66789;
// 소수점 3째자리에서 반올림, 2째자리까지 보여줌.
x1 = num.toFixed(2);    // string
console.log(x1, typeof (x1));

str = '124N';
let check;


console.log('---------------- Math -----------------');



console.log('---------------- Date  -----------------');

let today = new Date();     // 현재 시간
let nRealToday = new Date('2022-12-25 11:21:24');     // 시간 지정 가능
console.log(today);         // Date.toString() 메소드가 호출.
console.log('');
// today.setFullYear(2052);   // 연도 조작 가능

let year = today.getFullYear();
// 0이 1월, 1이 2월... 시작이 0부터 시작된다.
let month = today.getMonth();
let date = today.getDate();

// 요일. 0이 일요일, 1이 월요일
let day = today.getDay();
let realDay = ['일', '월', '화', '수', '목', '금', '토'];

console.log(`${year}-${month + 1}-${date} ${realDay[day]}요일`);

let hour = today.getHours();
let min = today.getMinutes();
let sec = today.getSeconds();
let millsec = today.getMilliseconds();
console.log(`${hour}:${min}:${sec}`);
console.log('');

let nowDate = today.toLocaleDateString();
let nowTime = today.toLocaleTimeString();
let now = today.toLocaleString();
console.log(nowDate);
console.log(nowTime);
console.log(now);


// 기억기억~!
let times = Date.now();
// 1970.01.01 00:00:00 부터 현재시간까지 경과시간을 mill초로 환산해서 돌려준다.
// 랜덤한 숫자 사용에 용이함. 절대 겹칠 수가 없기 때문.
console.log(times);

let obj = { id: Date.now(), name: 'TV' }
console.log(obj);

console.log('---------------- String  -----------------');
str = ' abc 123 DEF 456 ';

console.log(str.length);

// 앞 뒤 공백을 없애줌.
x = str.trim();
console.log(x, x.length);

console.log(x.toUpperCase(), x.toLowerCase());
console.log(x.substr(4, 8));    // 4부터 8개 추출
console.log(x.substring(4, 8)); // 4부터 8-1까지 추출

y = x.replace('23', '일이삼');
console.log(y, x);

y = x.indexOf('D');
console.log(y);

y = x.indexOf('D', 3);
console.log(y);

// 없는 값을 요구하면 -1을 리턴.

console.log('----------------try ~ catch ------------------');

// 여기서 에러가 나면 그 밑에 있는 줄들은 실행이 안됨.
try {
  console.log(abc);

} catch (err) {
  console.log(err.message);
}

try {
  if (true) {
    throw new Error('이게 표시될 에러 메시지');
  }
  console.log('여기는 실행 안됨.');
} catch (err) {
  console.log(err.message);
} finally {
  console.log('이건 항상 실행됨.');
}


console.log('종료');