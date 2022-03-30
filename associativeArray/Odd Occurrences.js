function solve(input){

let obj = {};
let arr = input.split(" ");

for (const el of arr) {
    let word = el.toLowerCase();
    let existing = obj[word];

    if(!obj.hasOwnProperty(word)) {
        obj[word] = 1;
    }else{
        obj[word] = existing += 1;
    }
}

let result = [];

for(let key in obj){
    let value = obj[key];
    if(value % 2 == 1){
        result.push(key)
    }
}

console.log(result.join(" "));

}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')