
console.log('---------------- Closure -----------------');

var x = 10;

function one() {
    var x = 'one';
    two();
}

function two() {
    console.log(x);
};
one();

