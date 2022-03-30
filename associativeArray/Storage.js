function solve(arr){

let map = new Map();

arr.forEach((line)=>{
    let [product, quantity] = line.split(" ");
    quantity = Number(quantity);
    let expected = 0
    if(map.has(product)){
        expected = map.get(product)
        map.set(product, quantity + expected);
    }else{
        map.set(product, quantity)
    }
})

for (const [product, quantity] of map) {
    console.log(product, "->",  quantity);
}



}
solve(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
)