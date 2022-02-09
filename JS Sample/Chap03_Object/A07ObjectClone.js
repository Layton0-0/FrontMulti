
console.log('---------------- Object Clone, Spread Operator -----------------');

var objA = {
    name: 'NolBu',
    age: 30
};

var objB = {
    address: 'Seoul',
    age: 100
}

// shallow Clone
// prototype 상속(복사) -> 내 자신의 값이 없으면 부모(prototype)의 값을 가져다 씀.
const one = Object.create(objA);

// [[Prototype]]을 확인
console.log(one);
console.log(one.name, one.age);

// clone
const two = Object.assign({}, objA);
console.log(two);
console.log(two == objA);


// 동일한 속성이 있으면 덮어쓰기 한다.
// objA 자체가 변경된다. (복사가 아닌 변경 개념)
const three = Object.assign(objA, objB);
console.log(three);


// ECMA2015(ES6) Spread Operator
var objC = {
    name: 'NolBu',
    age: 30
};

var objD = {
    address: 'Seoul',
    age: 100
}
// '...'스프레드 연산자는 객체 안에 있는 값들만 복사해온다.
const four = { ...objC };
console.log(four, objC);

const five = { id: 1, ...objC };
console.log(five);

const six = { ...objC, ...objD };
console.log(six);

var objE = {
    name: 'NolBu',
    age: 30,
    info: {
        tel: '010-1234-5678',
        address: 'Seoul'
    }
};

const seven = { ...objE };

const deep = {
    ...objE,
    info: {
        ...objE.info
    }
}

deep.name = '향단';
