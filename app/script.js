console.log('Snack Array e Oggetti')
/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/

const bicycles = [   // Array di oggetti
    {
        brand: 'Scott',
        weight: 9
    },
    {
        brand: 'Bianchi',
        weight: 11
    },
    {
        brand: 'Specialized',
        weight: 7
    },
    {
        brand: 'Cube',
        weight: 10
    },
]

// Stampo in console la bici con peso minore
// console.log(bicycles[2].weight)
// console.log(bicycles[2].weight * 2) // moltiplico * 2 il valore number di weigth
// console.log(bicycles[2]['weight'])

// peso di riferimento es. prima biciletta
let lightestWeightBicyle = bicycles[0]

// ciclo for per scorrere tutti gli elementi dell'array (bicilette)
for (let i = 0; i < bicycles.length; i++) {
    const currentElement = bicycles[i]

    // condizione if che confronta se il peso di riferimento è da aggiornare (confronto riferimento con elemento i) 
    if (currentElement.weight < lightestWeightBicyle.weight) {
        lightestWeightBicyle = currentElement
    }
}

// Stampo a schermo la bici con peso minore
console.log('Bicicletta più leggera:', lightestWeightBicyle)


/*
Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti fatti" e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

// Funzione per generare numeri casuali (da 1 a 100)
function getRandomNumber() {
    return Math.floor((Math.random() * 100) + 1)
}

const soccerSquads = [   // Array di oggetti
    {
        name: 'fiorentina',
        score: 0,
        penalties: 0
    },
    {
        name: 'milan',
        score: 0,
        penalties: 0
    },
    {
        name: 'inter',
        score: 0,
        penalties: 0
    },
    {
        name: 'juventus',
        score: 0,
        penalties: 0
    },
]


// per ogni Squad dell'array soccerSquads, richiamo il valori di tutti gli oggetti contenuti nell'array,
// tramite la funzione assegno i nuemri random
for (let i = 0; i < soccerSquads.length; i++) {
    soccerSquads[i].score = getRandomNumber()
    soccerSquads[i].penalties = getRandomNumber()
}

// Creazione di un nuovo array con solo nome e falli subiti
const nameAndPenalties = soccerSquads.map(squad => {
    return { name: squad.name, penalties: squad.penalties }
})

// Stampo in console il nuovo array i cui elementi contengono solo nomi e falli subiti
console.log(nameAndPenalties)



/*
Snack 3 (Bonus)
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
*/


function getArrayWithNumbersFromNumAToNumB(array, numA, numB) {
    if (numA < numB)
        return array.slice(numA, numB + 1)  // quando a è più piccolo di b, mi ritorno un array tagliato, da a a b
    else {
        return []
    }
}

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const result = getArrayWithNumbersFromNumAToNumB(numberArray, 3, 10)

// Stampo in console (4,5,6,7,8,9)
console.log(result)