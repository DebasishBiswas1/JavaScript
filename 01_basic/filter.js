const myNums = [1,2,3,4,5,6,7,8,9,10]

// const numsFilter = myNums.filter( (nums)=> nums>=5)
// console.log(numsFilter);

// const numsFilter = myNums.filter( (nums)=>{
//     return nums>5;
// })
// console.log(numsFilter);

const numsFilter = []

myNums.filter( (nums)=>{
    if(nums>5){
        numsFilter.push(nums);
    }
})
console.log(numsFilter);

const newNums = myNums.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>=51)
console.log(newNums);

