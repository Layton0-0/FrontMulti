
console.log('---------------- Map ES6 -----------------');

let myMap = new Map([
  [0, 'Nol'],
  [1, 'kim'],
  [2, 'Bang'],
]);

// 크기
console.log(myMap.size, myMap);

// 추가
myMap.set(3, 'Choi');
console.log(myMap.size, myMap);

// 삭제
myMap.delete(3);
console.log(myMap.size, myMap);

// 참조
console.log(myMap.get(2));

// 순환
for (let item of myMap) {
  console.log(item);
}

let tv = [
  { id: 1, company: 'Samsung', model: 'ABC', price: 1000 },
  { id: 2, company: 'LG', model: 'LG-1', price: 1000 },
  { id: 3, company: 'Apple', model: 'XS', price: 1000 },
  { id: 4, company: 'Motorola', model: 'DDI', price: 1000 },
];
let phone = [
  { id: 1, company: 'Samsung', model: 'ABC', price: 1000 },
  { id: 2, company: 'LG', model: 'LG-1', price: 1000 },
  { id: 3, company: 'Apple', model: 'XS', price: 1000 },
  { id: 4, company: 'Motorola', model: 'DDI', price: 1000 },
];