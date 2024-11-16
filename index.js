//OLD JAVASCRIPT



//ES6

shoppingList = ["Cow","Cat","Milk"];

//forEach Loop {Just Go Through Each Items}
shoppingList.forEach(product =(product, index)=>{
    console.log(`Product is ${product} and Index is ${index} +  Nice Choice`)
});

//Map 
const shoppingListTwo = shoppingList.map(product =>{
    return console.log(`Product is ${product} New`)
})

const shoppingListThree = shoppingList.map(product => console.log(`Product is ${product} Very New`))