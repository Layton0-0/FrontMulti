
console.log('---------------- Conditional Statement -----------------');
/*
    if(){ var x = 10; }
    for(var i = 10; .... ){ var x = 10; }
    switch(){ var x = 10; }
*/
{
  var x = 10;
}
console.log('{ }내부의 x => ', x);
// 지역 변수의 의미가 없다. garbage 콜렉션에 안넣어. 함수에서만 지역변수 작용.

console.log('');


var kor, eng, avg;
kor = 100;
eng = 60;
avg = (kor + eng) / 2;

// 단순 IF
if (avg > 80) {
  console.log('단순 if 합격');
}

// IF ~ ELSE
if (avg > 80) {
  console.log('단순 if-else 합격');
} else {
  console.log('단순 if-else 불합격');
}
console.log('');

// 다중 IF
// 조건에 만족하는 {} 블럭이 실행되고 전체 if문을 벗어난다.
// 필요에 따라 else {} 블럭을 구현할 수 있다.
if (avg > 80) {
  console.log('단순 if-else 합격');
} else if (avg > 70) {
  console.log('단순 if-else 재시험 2번');
} else if (avg > 60) {
  console.log('단순 if-else 재시험 1번');
}

// switch
var year = 2000;
var month = 2;
var day = 0;

switch (month) {
  case 1:
    day = 31;
    break;
  case 2:
    day = 28;
    break;
  default:
    day = 31;
    break;

}

