//OLD JAVASCRIPT

function sayName(){
    console.log("My name is Abir");
}

var sayAge = function(){
    console.log("Age is Just a Number");
}
sayAge();
sayName();

//ES6

const myLocation = () => {
    console.log("My Location is Unknown");
};
myLocation();

const myLocationTwo = location => {
    console.log(`My Location is ${location}`);
}
myLocationTwo("Paris");

const myLocationThree = location => 
    console.log(`My Location is ${location}`);
//Without bracket/parenthesis when only one parameter 
myLocationThree("London")