// Immediately invoked function expression (IIFE)

(function chai() {
    console.log(`Hello chai lover`);
})();

//This function gets automatically invoked
// ()() -> first parenthesis is for function defination and second one is for calling funtion
// semocolon is given to tell the function where to end the function

(()=>{
    console.log(`Hello akdom chai lover`);
})();
// Arrow function also can be called at the same way

((name)=>{
    console.log(`DB Connected for ${name} user`);
})("Debasish");
// In this way we can pass parameters