
console.log('---------------- Internal Slot, Method -----------------');

var obj = {
    // 데이터 프로퍼티
    firstName: 'Hong',
    lastName: 'GilDone',
    age: 30,
    role: 10,
    display: function () {
        console.log(`${this.firstName} / ${this.lastName}`)
    },

    // 접근자 프로퍼티 => 정의는 함수 형태로 하고 사용은 프로퍼티 형태로 한다.
    // JAVA의 getter setter 함수와 같음.
    get fName() {
        return this.firstName;
    },
    set fName(str) {
        // 이런 식으로 값을 세팅할 때 제약조건을 줄 수 있다.(get set 필요이유.)
        if (this.role > 3 && typeof (str) === 'string') {
            this.firstName = str;
        }

    }
};

console.dir(obj);
console.log(obj.firstName, obj.fName);
obj.fName = '흥';
console.log(obj.firstName, obj.fName);
console.log('');

console.log(obj.__proto__);
console.log(Object.getPrototypeOf(obj));

console.log(Object.getOwnPropertyDescriptor(obj, 'firstName'));

Object.defineProperty(obj, 'firstName', { writable: false }); // 이 이후로는 수정 불가.

obj.firstName = '박';
console.log(obj.firstName);
