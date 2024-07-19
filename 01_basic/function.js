// // This is a normal function

// function addOne(num){
//     return num + 1
// }
// addOne(2)
// // This is called expression

// const addTwo = function(num){
//     return num + 2
// }
// addTwo(4)



// This is a normal function

console.log(addOne(2));  //will get executed without error
function addOne(num){
    return num + 1
}
// This is called expression

//addTwo(4) // will get error while executing
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(4));