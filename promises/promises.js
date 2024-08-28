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

// promise three

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"deba",email:"deba@example.com"});
        
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

// promise four

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        const error = false;
        if(!error){
            resolve({username:"debasish",pasword:"123"});
        }else{
            reject('ERROR: Something went wrong');
        }
        
    },1000)
})

promiseFour.then(function(user){
    console.log(user);
    return user.username;
}).then( (username)=>{
    console.log(username);
}).catch( (error)=>{
    console.log(error);
})