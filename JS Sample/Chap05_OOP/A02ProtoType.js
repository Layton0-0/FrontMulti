// 자바스크립트는 프로토타입을 기반으로 상속을 구현한다.
console.log('---------------- prototype chain -----------------');

var one = {
    name: 'One',
    display: function () { console.log(this.name) }
};

var two = {
    name: 'Two'
};

two.__proto__ = one;
two.display();

var three = {};

// three에 one으로 프로토타입을 지정.
Object.setPrototypeOf(three, one);