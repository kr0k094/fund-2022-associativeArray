function solve(input) {
 
    
let obj = {
    vip : [],
    regular : [],
}

while (input[0] !== "PARTY"){
    let guest = input.shift();
    let char = Number(guest[0]);

    if(isNaN(char)){
        obj.regular.push(guest);
    }else {
        obj.vip.push(guest)
}
}

for (const el of input) {
    if(obj.regular.includes(el)){
        let index = obj.regular.indexOf(el);
        obj.regular.splice(index,1);
    }
    if(obj.vip.includes(el)){
        let index = obj.vip.indexOf(el);
        obj.vip.splice(index,1);
    }
}

console.log(obj.regular.length + obj.vip.length);
let result = obj.vip.concat(obj.regular);
for (const el of result) {
    console.log(el)
}


}
solve(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]
)