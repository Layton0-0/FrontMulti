
console.log('---------------- OOP -----------------');

var person = 'NolBu';
var kor = 100;
var eng = 80;
var onTotal = function () {
    return kor + eng;
};
var onAvg = function () {
    return onTotal() / 2;
}
var display = function () {
    console.log(`${person} / ${onTotal()} / ${onAvg()}`);
}
display();

// const hungbu = {
//     name = 'HungBu',
//     kor: 100,
//     eng: 80,
//     on
// }

// class 함수의 이름은 대문자로 기술하는 것이 관례.
function Jumsu(name, kor, eng) {
    this.name = name;
    this.kor = kor;
    this.eng = eng;

    this.onTotal = function () {
        return kor + eng;
    };
    this.onAvg = function () {
        return onTotal() / 2;
    }
    this.display = function () {
        console.log(`${this.name} / ${this.onTotal()} / ${this.onAvg()}`);
    }
}

const bangJa = new Jumsu('방자', 80, 90);
const hangDan = new Jumsu('향단', 70, 40);
console.log(bangJa);

function JumsuProp(name, kor, eng) {
    this.name = name;
    this.kor = kor;
    this.eng = eng;
}
JumsuProp.prototype.onTotal = function () {
    return kor + eng;
};
JumsuProp.prototype.onAvg = function () {
    return onTotal() / 2;
}
JumsuProp.prototype.display = function () {
    console.log(`${this.name} / ${this.onTotal()} / ${this.onAvg()}`);
}

const bangJa1 = new JumsuProp('방자', 80, 90);
const hangDan1 = new JumsuProp('향단', 70, 40);
console.log(bangJa1);
console.log(hangDan1);