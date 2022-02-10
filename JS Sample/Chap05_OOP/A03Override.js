
console.log('---------------- property shadowing -----------------');

function Person(name, age) {
    this.name = name;
    this.age = age;
};
// 1. 프로토타입의 display를
Person.prototype.display = function () {
    console.log(`${this.name} / ${this.age}`);
};
// 2. 자식에서의 display로 덮어버림.
nolbu.display = function () {
    console.log('hi');
}

var nolbu = new Person('NolBu', 30);
nolbu.display();
