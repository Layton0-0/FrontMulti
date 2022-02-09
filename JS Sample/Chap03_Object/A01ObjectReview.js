console.log('--------------------object---------------------');

const three = new Object();
three.name = 'ONE';
three.kor = 100;
three.eng = 90;
three.total = three.kor + three.eng;
three.avg = three.total / 2;
three.that = this;
three.info = function () {
  console.log(this);
}

console.log(three);
three.info();

// {} 사용
const two = {
  name: 'TWO',
  kor: 80,
  eng: 70,
  // 초기화될 때 어떤 프로퍼티가 먼저 초기화될 지 모름. kor 프로퍼티가 없을 수도 있음.
  // total: two.kor + two.eng,
  // avg: total / 2,
  that: this,
  info: function () {
    console.log(this);
  },
  total: function () {
    return this.kor + this.eng;
  },
  avg: function () {
    return this.total / 2;
  }
}
console.log(two);
two.info();

// key가 JavaScript

const three = new Object();
three.name = 'THREE';
three['t-kor'] = 100;
three['t-eng'] = 90;
three[200] = 50;
three.total = three['t-kor'] + three['t-eng'];
three.avg = three.total / 2;
three.that = this;
three.info = function () {
  console.log(this);
}

console.log(three);
console.log(three[200]);
three.info();

const four = {
  name: 'FOUR',
  'f-kor': 80,
  'f-eng': 70,
  that: this,
  info: function () {
    console.log(this);
  },
  total: function () {
    return this['f-kor'] + this['f-eng'];
  },
  avg: function () {
    return this.total / 2;
  }
}
console.log(four);
four.info();