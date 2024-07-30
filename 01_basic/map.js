const map = new Map();

// Map is a unique set of key value pair in js

map.set("IN","India")
map.set("FR","France")
map.set("UK","United Kingdom")

for (const key of map) {
    console.log(key);
}

for (const [key,value] of map) {
    console.log(key+" :- "+value);
}
