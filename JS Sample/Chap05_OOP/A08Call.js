
console.log('---------------- [354] call, apply, bind -----------------');

var count = 100;

var myObj = {
    count: 0,

    visit: function () {
        this.count++;
        console.log('visit=> ', this.count, this);

        function inner(x) {
            this.count += x;
            console.log('call, apply this=> ', this.count, this);
        }
        // this를 동적으로 변경시키는 키워드. (call, apply)
        // inner함수 내부의 this를 mtObj로 지정해서 실행. 뒤에 이어서 매개변수 입력.
        inner.call(myObj, 2);
        // apply는 인자를 리스트로 전달.
        inner.apply(myObj, [2, 3, 4]);
    }
}
myObj.visit();
console.log('합계', myObj.count);
console.log('');


console.log('--------------- bind의 이용 ---------------');
var count = 100;

var yourObj = {
    count: 0,

    visit: function () {
        this.count++;
        console.log('visit=> ', this.count, this);

        function inner(x) {
            this.count += x;
            console.log('bind this=> ', this.count, this);
        }

        inner(2);
        // this가 변경된 메서드를 새롭게 생성
        // inner 메서드의 this참조를 yourObj로 변경한 후에
        // 함수 내용을 그대로 변수(bindInner)에 대입 후 자유롭게 사용.
        // bindInner와 inner의 내용물은 동일하지만 this의 참조만 달라진다.
        let bindInner = inner.bind(yourObj);
        bindInner(3);
    }
}
yourObj.visit();
console.log('합계', yourObj.count);
console.log('');


