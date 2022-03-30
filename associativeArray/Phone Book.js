function solve(input){

let obj = {};

for (const line of input) {
    let [person, number] = line.split(" ");
    obj[person] = number;
}

for(let key in obj){
    console.log(key, "->", obj[key])
}

}
solve(['Tim 0834212554',
        'Peter 0877547887',
        'Bill 0896543112',
        'Tim 0876566344'])