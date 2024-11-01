//OLD JAVASCRIPT

function getBook(title, author){
    return{
        author: author,
        title: title
    };
}
var book = getBook("Harry Potter", "Abir");
console.log(book);
//ES6

function getBusDetailsES6(Bus, Name){
    return{
       Bus,
       Name
    };
}

var getBusDetails = getBusDetailsES6("National","Express");
console.log(getBusDetails)