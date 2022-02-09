
console.log('---------------- defineProperty -----------------');

function printObject(data) {
    for (const prop in data) {
        console.log(prop, data[prop]);
    }
};

var obj = {
    name: 'NolBu',
    age: 30
};

// writable: 쓰기가능여부(추가)
// enumerable: 열거 가능여부(읽기)
// configurable: 재정의 가능 여부(수정)


