const map = new Map();

// Map is a unique set of key value pair in js

map.set("IN","India")
map.set("FR","France")
map.set("UK","United Kingdom")

for (const key of map) {
    // console.log(key);
}

for (const [key,value] of map) {
    // console.log(key+" :- "+value);
}


const coding = ["js","cpp","c","py","ruby"]

coding.forEach( (item)=>{
    // console.log(`Coding short form: ${item}`);
})

function printMe( item ){
    console.log(item);
}

// coding.forEach(printMe)

coding.forEach( (item,index,arr)=>{
    // console.log(item,index,arr);
})

const codingLang = [
    {
        language:"javascript",
        shortForm:"js"
    },
    {
        language:"java",
        shortForm:"js"
    },
    {
        language:"javascript",
        shortForm:"js"
    }
]