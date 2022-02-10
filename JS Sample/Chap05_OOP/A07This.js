
console.log('---------------- this -----------------');

// 객체 내부 메소드 내부의 함수.
// let는 TDZ에 올라감. var이 window에 올라감.
// 함수 안의 함수의 this는 window를 가리킨다.
let count = 100;

const myObj = {
    count: 0,
    visit: function () {
        ++this.count;
        console.log('visit: ', this.count);
    }
};

myObj.visit();
console.log('');


console.log('--------------- 편법 that ---------------');
// var count = 100;




console.log('--------------- 함수 내부의 함수 ---------------');
var cnt = 10;






var person = {
    name: 'NolBu',
    display: function () {
        console.log(this.name);
    }
}

var emp = { name: 'HungBu' };


