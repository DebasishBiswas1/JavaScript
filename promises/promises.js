// Promise One

const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task is complete");
        resolve();
        
    },1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");
})

// Promise two

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2 is complete");
        resolve();
        
    },1000)
}).then(function(){
    console.log("promise 2 cunsumed");
    
})