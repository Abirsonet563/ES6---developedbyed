//OLD JAVASCRIPT

var user = {
    name: "Abir",
    age: 23
}

var userAge = user.age;
console.log(userAge)

//ES6
var userES6 = {
    name: ['Abir','Hasan','Saif'],
    age: [21,23,24]
};

const {name, age} = userES6;
console.log(name, age);