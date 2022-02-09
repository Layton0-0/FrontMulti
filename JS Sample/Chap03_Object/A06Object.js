
console.log('---------------- Object internal Method -----------------');

var one = { name: 'NolBu', age: 30 };

// 확장 가능(속성 추가) 여부. 삭제, 읽기, 쓰기 가능
console.log(Object.isExtensible(one));

// 속성 추가를 막기.
Object.preventExtensions(one);
console.log(Object.isExtensible(one));
// 변경과 삭제는 가능
one.name = '놀부';
delete one.name;


// 객체 밀봉. 프로퍼티 추가, 삭제 금지. 읽기 쓰기 가능
var two = { name: 'NolBu', age: 30 };
console.log(Object.isSealed(two));
two.address = 'seoul';
console.log(two);

delete two.address;
// 밀봉. 이 후로는 추가, 삭제 안됨.
Object.seal(two);




// 객체 동결. 읽기만 가능하다
var three = { name: 'NolBu', age: 30 };

console.log(Object.isFrozen(three));

Object.freeze(three);
three.name = '놀부'
three.address = 'Seoul';
delete three.age;

console.log(three);
console.log(Object.getOwnPropertyDescriptors(three));




