function solve(input){
let obj = {};

let surchWords = input.shift().split(" ");
let text = input;

for (const word of surchWords) {
    obj[word] = 0;
}

for (const word of text) {
    let existing = obj[word];

    if(obj.hasOwnProperty(word)){
        obj[word] = existing += 1;
    }
}
let entries = Object.entries(obj).sort((a, b)=> b[1] - a[1]);

for (const [word, count] of entries) {
    console.log(word, "-", count);
}

}
solve([
    'this sentence', 
    'In', 'this', 'sentence',
     'you', 'have', 'to', 'count',
      'the', 'occurances', 'of', 'the',
       'words', 'this', 'and', 'sentence',
        'because', 'this', 'is', 'your', 'task'])