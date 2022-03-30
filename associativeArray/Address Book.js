function solve(arr){

let obj = {};

arr.forEach((line)=>{
    let [name, adress] = line.split(":");

    obj[name] = adress;
});


let entries = Object.entries(obj)
.sort((a, b)=> a[0].localeCompare(b[0]));

for(let [name, adress] of entries){
    console.log(name, "->", obj[name]);
}


}
solve(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
)