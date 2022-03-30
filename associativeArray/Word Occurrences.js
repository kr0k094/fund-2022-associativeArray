function solve(text){

let obj = {};

for (const el of text) {
    let existing = obj[el];

    if(!obj[el]){
        obj[el] = 1;
    }else{
        obj[el] = existing += 1;
    }
}

let entries = Object.entries(obj).sort((a, b)=> b[1] - a[1]);

for (const [word, times] of entries) {
    console.log(`${word} -> ${times} times`);
}

    
}
solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])