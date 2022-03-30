function solve(arr){

let players = {};
let cardObj = {
    1 : 10,
    2 : 2,
    3 : 3,
    4 : 4,
    5 : 5,
    6 : 6,
    7 : 7,
    8 : 8,
    9 : 9,
    J : 11,
    Q : 12,
    K : 13,
    A : 14,
};

let typeObj = {
    S : 4,
    H : 3,
    D : 2,
    C : 1,
};

arr.forEach((x)=> {
    let [player, cards] = x.split(': ');
    if(!players[player]){
        players[player] = [];
    }
     
    for (const card of cards.split(", ")) {
        if(players[player].includes(card) === false){
            players[player].push(card);
        }
    }
})

for (const key in players) {
    let sum = 0;
  
    for(let i = 0; i < players[key].length; i++) {
        let currentEl = players[key][i].split("");
        let [number, power] = currentEl;
        if(currentEl.length > 2){
            number = 1;
            power = currentEl.slice(-1)
        }
        let cardPower = cardObj[number];
        let cardType = typeObj[power]

        sum += cardPower * cardType;
        
        
    }
        
    console.log(`${key}: ${sum}`);
}

}
solve([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ]
    )