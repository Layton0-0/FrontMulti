
console.log('---------------- Closure -----------------');

let num = 0;

const incOne = function () {
  return num;
};

// static과 비슷하게 미리 메모리 상에 올라가서 끝까지 감.
// 인스턴스와 비슷하게 한번 호출할 때마다 하나의 메모리 공간이 따로 생김.