//OLD JAVASCRIPT

console.log("Start");
function getData(data, callback){
    setTimeout(() => {
        console.log("Reading From DataBase")
        callback({data: data})
    }, 2000);
}
getData(5, function(data) {
    console.log(data);
});
console.log("Finish");
//ES6
const prom = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        // resolve({user: "Abir", pass: 123});
        reject(new Error("Something Went Wrong"));
    }, 1000)
});
   prom.then(data => {
    console.log(data);
   })
   .catch(err => console.log(err));