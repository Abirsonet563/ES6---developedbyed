//OLD JAVASCRIPT
var user = {
    name: "Abir",
    age: 23,
    sayName: function(){
        console.log(`My Name is ${this.name}`)
        var that = this;
        var fullName = function(){
            console.log(`My name is ${that.name} and My Age is ${that.age}`); 
        }
        fullName();
    }
};
user.sayName();

//ES6

var userTwo = {
    name: 'Abir',
    age: 23,
    sayNameTwo: function(){
        console.log(`My name is ${this.name}`);
        const fullNameTwo = () => {
            console.log(`My Name is ${this.name} and My Age is ${this.age}`);
        }
        fullNameTwo();
    }
}
userTwo.sayNameTwo();