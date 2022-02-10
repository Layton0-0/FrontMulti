
console.log('---------------- Set ES6 -----------------');
// set과 map을 쓰는 이유
// set은 중복된 값을 없애기 위해서
// map은 key value값으로 저장하기 위해서.

// 중복된 데이터는 덮어쓴다. (중복 허용 안함)
let mySet = new Set([10, 11, 100, 11, 10, 1000]);

// 크기
console.log(mySet.size);

// 값을 꺼내오는 함수는 지원하지 않음
// 값이 있니?
console.log(mySet.has(10));
console.log(mySet.has(1));

let x = 0;
if (mySet.has(10)) {
  x = 10;
};
console.log(x);
console.log('');

// 값 추가
mySet.add(1000);
mySet.add(30);
console.log(mySet, mySet.size);

// 값 제거
x = mySet.delete(30);
console.log(x, mySet);

// 순환
for (let i = 0; i < mySet.size; i++) {
  console.log(mySet[i]);
}

// 순환 가능
mySet.forEach((item, index) => {
  console.log(index, item);
});

// key(), value(), entries

// set에는 index가 없음. 따라서 for문 순환이 안됨.
// set은 value가 key역할도 한다.
let key = mySet.keys();
console.log(key);

let value = mySet.values();
console.log(value);

// index => value 형태로 출력
let entries = mySet.entries();
console.log(entries);
console.log('');

// iterator 객체는 next()를 이용해서 하나씩 순차적으로 참조 가능한 객체
console.log(key.next());
console.log(key.next());
console.log(key.next());
console.log(key.next());
console.log(key.next());

let ary = [12, 3, 4325, 23425];
// for-in문은 인덱스를 보여줌.
for (let i in ary) {
  console.log(i, ary[i]);
}
// for-of는 값을 차례대로 줌.
for (let item of mySet) {
  console.log(item);
}