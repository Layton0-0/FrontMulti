
console.log('---------------- Object -----------------');
// var 변수는 window(global) 영역을 오염시킨다.
// let, const -> TDZ에 선언되므로 window(global) 영역을 오염시키지 않는다.
// const는 참조변수(레퍼런스 변수)의 변경은 못잡는다. 이 경우 참조값(주소)만 변경되지 않으면 됨.
const obj = {
    name: 'NolBu',
    address: 'Seoul',
    info: function () {
        console.log(this.name + ' / ' + this.address);
    }
};

// obj = { name: 'ABC'}; -> 이건 안돼.
// arr은 크기가 3인 배열을 참조함. arr의 주소값을 바꾸는 것이 아니면 에러가 아님.
const arr = [10, 20, 30];
arr[0] = 100;

// 프로퍼티 추가
obj.age = 30;
console.log(obj);

// 프로퍼티 값 변경. 존재하는 프로퍼티에 다른 값을 대입.
obj.name = 'HungBu';
console.log(obj);

// 프로퍼티 삭제. delete 명령으로 기본형 변수는 삭제할 수 없음.
delete obj.age;
console.log(obj);

// 메서드도 추가 가능하다.
obj.display = function () {
    console.log(this.address);
}
// 필요없는(중복되는) console.log찍으면 undefined가 찍힘.
// console.log(obj.display()); 
obj.display();

delete obj.display;
console.log(obj);