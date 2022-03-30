function solve(arr) {
    let obj = {}

arr.forEach((line)=>{
    let [direction, carNumber] = line.split(', ');
    if (direction == "IN" && !obj.hasOwnProperty(carNumber)){
        obj[carNumber] = "IN"
    }
    if(direction == "OUT" && obj.hasOwnProperty(carNumber)){
        delete obj[carNumber];
    }


})

let entries = Object.entries(obj).sort((a, b)=> a[0].localeCompare(b[0]));

if(entries.length == 0){
    console.log("Parking Lot is Empty");
}else{
    for (const [carNumber, direction] of entries) {
        console.log(carNumber)
    }
}

}
solve(['IN, CA2844AA',
        'IN, CA1234TA',
        'OUT, CA2844AA',
        'IN, CA9999TT',
        'IN, CA2866HI',
        'OUT, CA1234TA',
        'IN, CA2844AA',
        'OUT, CA2866HI',
        'IN, CA9876HH',
        'IN, CA2822UU']
)