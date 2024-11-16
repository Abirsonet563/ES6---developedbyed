//OLD JAVASCRIPT

function person(name, age, hairColor){
 this.name= name;
 this.age= age;
 this.hairColor= hairColor;
}

person.prototype.sayName = function() {
    console.log(`My name is ${this.name}`);
};

function Abir(ocupation, hobby, name, age, hairColor){
person.call(this, name, age, hairColor);
this.ocupation = ocupation;
this.hobby = hobby;
}

Abir.prototype = Object.create(person.prototype);

const Person = new Abir ("SE","Coding","Abir",23,"Black")
const saif = new person("Saif",19,"Black")
console.log(saif);
console.log(Person);
Person.sayName();
//ES6

class shoppingListTwo{
    constructor(item, nr){
    this.item = item;
    this.nr = nr;
}
 sayList(){
    console.log(this.item);
 }
}


class product extends shoppingListTwo{
    constructor(item, nr, amount, cost){
        super(item, nr);
        this.amount = amount;
        this.cost = cost;
    }
}
const newShoppingList = new product(['Milk','Cow','Elefent'],3,5,120)
console.log(newShoppingList);
newShoppingList.sayList();