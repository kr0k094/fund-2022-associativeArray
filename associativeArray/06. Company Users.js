function solve(arr){

let obj = {};

for (const line of arr) {
    let [company, employee] = line.split(' -> ');

    if(obj.hasOwnProperty(company) == false){
        obj[company] = new Set();
    }
    obj[company].add(employee);
}
let entries = Object.entries(obj).sort((a, b)=> a[0].localeCompare(b[0]));

for(let [company, employee] of entries){
    console.log(company)
    for (const id of obj[company]) {
        console.log("--", id)
    }
}


}
solve([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]
    )
    console.log("--------");

    solve([
        'SoftUni -> AA12345',
        'SoftUni -> CC12344',
        'Lenovo -> XX23456',
        'SoftUni -> AA12345',
        'Movement -> DD11111'
        ]
        )