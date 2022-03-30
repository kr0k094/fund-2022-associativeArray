function solve(arr){

let obj = {};

for(let line of arr){
    let [day, person] =line.split(" ");

    if(!obj[day]){
        obj[day] = person;
        console.log(`Scheduled for ${day}`);
    }else{
        console.log(`Conflict on ${day}!`);
    }
}

for(let key in obj){
    console.log(key, "->", obj[key]);
}

}solve(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)