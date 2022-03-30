function solve(arr){

    let obj = {};
    

for(let i = 0; i < arr.length; i += 2){
    let resource = arr[i];
    let quantity = arr[i + 1];
    quantity = Number(quantity)
    let existing = obj[resource];

    if(obj[resource]){
        obj[resource] = existing + quantity;
    }else{
        obj[resource] = quantity
    }
   
}

for (const key in obj) {
    console.log(key, "->", obj[key]);
}


}
solve([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
    )