
console.log('---------------- Object this -----------------');
// this는 호출될 때 어디서 호출되냐에 따라 정해짐.
// 보통 .앞의 곳이 this를 뜻함.
const obj = {
    name: 'NolBu',
    age: 20,
    display() {
        console.log(`${this.name} / ${this.age}`);
    }
};



function Person(name, age) {
    this.name = name;
    this.age = age;
};
// this = Object
Person.prototype.display = function () {
    console.log(`${this.name} / ${this.age}`)
};

console.log(this);          // this = window

function onAdd() {
    console.log(this);
}

onAdd();                    // this = window(함수를 호출한 장소가 글로벌 영역이기 때문.)

const objA = {
    name: Object,
    onAdd: onAdd
}
console.log(objA.name);
objA.onAdd();               // this = objA

const arr = [10, 20, onAdd];
console.log(arr[0], arr[1]);
arr[2]();                   // this = arr