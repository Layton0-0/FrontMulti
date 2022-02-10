
console.log('---------------- OOP -----------------');

var Jumsu = (function () {
    function Jumsu(name, kor, eng) {
        this.name = name;
        this.kor = kor;
        this.eng = eng;
    }

    Jumsu.prototype.onTotal = function () {
        return this.kor + this.eng;
    }
    Jumsu.prototype.onAvg = function () {
        return this.onTotal() / 2;
    }
    Jumsu.prototype.display = function () {
        console.log(`${this.name} / ${this.onTotal()} / ${this.onAvg()}`);
    }

    return Jumsu;
})();

let nolbu = new Jumsu('NolBu', 100, 80);
nolbu.display();




// ES6
class JumsuClz {
    // 멤버변수 호출 불가. constructor(생성자) 메서드 내부에서 정의.
    constructor(name, kor, eng) {  // 이게 생성자 메서드. 무조건 이 이름으로 고정.
        this.name = name;
        this.kor = kor;
        this.eng = eng;
    }

    onTotal() {
        return this.kor + this.eng;
    }
    onAvg(num) {
        return this.onTotal() / num;
    }
    // getter & setter
    get _kor() {
        return this.kor;
    }
    set _kor(num) {
        if (typeof (num) !== 'number') {
            this.kor = 0;
        } else {
            this.kor = num;
        }
    }

    // static
    // static 에서는 this 참조
    // static이 붙은 변수나 함수는 클래스 이름으로 호출된다.
    static display(name) {
        console.log(`hey ${name}`);
    }
    static progName = 'Jumsu Program';
}

const hungbu = new JumsuClz('흥부', 100, 80);
console.log(hungbu);

// static
JumsuClz.display('yoon');

// getter & setter
// 프로퍼티처럼 사용된다.
hungbu._kor = 1000;
console.log(hungbu._kor);