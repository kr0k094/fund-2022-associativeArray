function solve(arr){

let obj = {};

arr.forEach((line)=>{
    let tokens = line.split(" ");
    let student = tokens.shift();
    let grades = tokens.map(Number);

    let currentGrades = obj[student];

    if(!obj[student]){
        obj[student] = grades;
    }else{
        obj[student] = grades.concat(currentGrades);
    }
})
let entries = Object.entries(obj)
.sort((a, b)=> a[0].localeCompare(b[0]));

for(let [student, grades] of entries) {
    let average = grades.reduce((a, b)=> a + b, 0) / grades.length;
    console.log(`${student}: ${average.toFixed(2)}`);
}

}
solve(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']
)