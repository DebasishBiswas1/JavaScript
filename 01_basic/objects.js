// two way to declare objects:
// singleton
// object literals

const JsUser = {
    name: "Debasish",
    email: "deba@gmail.com",
    id: 123,
    days: ["mon","tues"],
    "full name":"d.biswas"
}

// two wya to access object properties

console.log(JsUser.email);
console.log(JsUser["email"]);

console.log(JsUser["full name"]);

// Task: take input a symbol add it to an object and print it.

const mySym = Symbol("key");

const obj = {
    [mySym]:"key"
}

console.log(obj[mySym]);

// To freeze the object so that no changes can be made
// Object.freeze(JsUser)

// Add greeting function
JsUser.Greeting = function(){
    console.log("Hello New User");
}

console.log(JsUser.Greeting); //[Function (anonymous)] as output

console.log(JsUser.Greeting());

// Accessing other properties of this object using "this"
JsUser.GreetingTwo = function(){
    console.log(`Hi ${this.name}, Welcome back!`);
}

console.log(JsUser.GreetingTwo());

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// singleton object declaration

const tinderUser = new Object()
console.log(tinderUser);

// merging objects
const obj1 = {a:1,b:2}
const obj2 = {c:3,d:6}

// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
console.log(obj3);


// when objects comes from the database they arrive in the form of arrays of objects...

const users = [
    {
        id:"12AB",
        name:"deba"
    },
    {
        id:"12AB",
        name:"deba"
    },
    {
        id:"12AB",
        name:"deba"
    }
]
console.log(users[1].name) //to access this array of objects


// special object methods
console.log(Object.keys(JsUser));
console.log(Object.values(JsUser));
console.log(Object.entries(JsUser));

console.log(JsUser.hasOwnProperty("days")); //to check if have this property
