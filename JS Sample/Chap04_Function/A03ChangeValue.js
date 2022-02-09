
console.log('---------------- Primary Type And Reference Type-----------------');

var numA = 100;
var numB = numA;

// 비교
console.log(numA == numB, numA === numB);

numA = 200;
console.log(numA == numB, numA === numB);
console.log('');


var objA = {
    name: 'NolBu',
    age: 30,
};

var objB = objA;
console.log(objB == objB, objA === objB);

objA.name = 'HungBu';
console.log(objA == objB, objA === objB);
console.log('');


// 값이 같은 새로운 객체 
var objC = {
    name: 'HungBu',
    age: 30,
};

console.log(objA === objC);
console.log('');




var num = 100;
var obj = {
    name: 'NolBu',
    age: 30
};

function func(x, y) {
    x = 1;
    y.name = 'ABC';
};
let x = 100;
let y = { name: 'Y', num: 200 };

console.log('----- 함수 호출 이전 -----');
console.log(x, y);
console.log(num, obj);

func(x, y);
// 레퍼런스 변수를 넘기느냐 그냥 지역변수를 넘기느냐에 따라 함수 밖으로 나왔을 때 값이 변경하는지 아닌지 달라짐.
console.log('----- 함수 호출 이후 -----');
console.log(x, y);
