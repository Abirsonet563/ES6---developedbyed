//OLD JAVASCRIPT

function multiply(a,b) {
var x =  a || 10;
var y =  b || 10;
console.log(x*y);
}
multiply(100, 100);

//ES6

const multiplyTwo = (a = 10, b = 10) => {
console.log(a*b);
} 
multiplyTwo(100);