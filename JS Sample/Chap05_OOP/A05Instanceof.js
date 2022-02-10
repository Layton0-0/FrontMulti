
console.log('---------------- Instanceof -----------------');
// 기본형을 typeof로, 레퍼런스형은 instanceof로 체크함.
function Person(name, age) {
    this.name = name;
    this.age = age;
};

Person.prototype.display = function () {
    console.log(`${this.name} / ${this.age}`);
};

var nolbu = new Person('NolBu', 30);
nolbu.display();

console.log(nolbu instanceof Person);
console.log(nolbu instanceof Object);

// in속성(~~이 in ~~ 안에 있니?)
console.log('name' in nolbu);