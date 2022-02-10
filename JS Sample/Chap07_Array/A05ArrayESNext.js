
console.log('---------------- Array Callback -----------------');

// ES6
let ary = new Array(10);            // empty * 10
// 자바스크립트는 자동초기화가 안됨. 아래는 초기화 해주는 방법.
ary.fill(0, 0);
console.log(ary);

// 2부터 7까지
ary.fill('A', 2, 7);
console.log(ary);

// includes
ary = [12, 344, 564, 2342, 663643];
console.log(ary.includes(344));
console.log(ary.includes(123));




console.log('---------------- Array find, findindex -----------------');
// 자바스크립트에서 가장 많이 사용되는 형태
// 자바라면 arraylist에 vo객체가 대입되어 있는 상태
var objArray = [
    { id: 1, name: 'NolBu', age: 35 },
    { id: 2, name: 'BangJa', age: 18 },
    { id: 3, name: 'HungBu', age: 25 },
    { id: 4, name: 'BangJa', age: 18 },
];

function findItem(index) {
    return objArray[index];
};

let x = findItem(2);        // 배열의 인덱스 번호를 입력.
console.log(x);

// id와 매칭되는 인덱스 번호를 가져오자.
// 여러개면 첫번째것만 가져옴.
x = objArray.findIndex(item => item.age === 18);
console.log(x);
console.log(objArray[x]);

// item을 통째로 리턴
x = objArray.find((item) => item.id === 1);
console.log(x);