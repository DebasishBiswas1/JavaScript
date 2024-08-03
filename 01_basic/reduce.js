const myNums = [1,2,3,4,5,6,7,8,9,10]

const myVal = myNums.reduce((acc,currV)=>{
    console.log(`acc: ${acc} and currentVal: ${currV}`);
    return acc+currV;
},0)
console.log(myVal);
