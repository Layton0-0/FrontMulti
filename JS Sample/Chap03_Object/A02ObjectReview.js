
console.log('---------------- Object -----------------');

const obj = {
  name: 'NolBu',
  address: 'Seoul',
  info: function () {
    console.log(this.name + ' / ' + this.address);
  }
};

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
console.log('');

for (let key in obj) {
  console.log(typeof (key));      //string
  console.log(key, obj[key]);     // obj.'name'(x) -> obj['name']
}