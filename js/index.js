// FUNZIONI ***********************************************************

/**
 * Funzione uguale a document.querySelector() ma riassunta in meno caratteri
 * @param {string} querySelector Indica un selettore css valido
 * @returns 
 */
function el(querySelector) {
    let domElement;
    if (querySelector === ':root' || querySelector === 'root') {
        domElement = document.documentElement;
    } else {
        domElement = document.querySelector(querySelector);
    };
    return domElement;
};

/**
 * Genera un numero random compreso o uguale a min e max, 
 * se i valori non vengono specificati il generatore darà come output o 1 o 0
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
function randomNum(min, max) {
    if (min === undefined && max === undefined) {
        min = 0;
        max = 1;
    };
    if (min < max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
        return Math.floor(Math.random() * (min - max + 1)) + max;
    };
};

/**
 * Funzione che genera una lista lunga 'listLenght' di valori numerici 
 * random diversi compresi tra 'rangeNumMin' e 'rangeNumMax'
 * @param {number} rangeNumMin 
 * @param {number} rangeNumMax 
 * @param {number} listLenght 
 * @returns {Array}
 */
function getRandomList(rangeNumMin, rangeNumMax, listLenght) {
    const randomList = [];
    while (randomList.length < listLenght) {
        const item = randomNum(rangeNumMin, rangeNumMax);
        if (!randomList.includes(item)) {
            randomList.push(item);
        };
    };
    return randomList;
};


// VARIABILI *********************************************************

const pcNumbersList = getRandomList(0, 9, 5);
const userNumbersList = [];
const matchNumbersList = [];

// EVENTI ***********************************************************

for (i = 0; i < pcNumbersList.length; i++) {
    el(`#n-${i + 1}`).innerHTML = pcNumbersList[i];
};

setTimeout(function(){

    el('.my-numbers-container').classList.replace('d-flex', 'd-none');

}, 30000);

setTimeout(function(){

    while (userNumbersList.length < 5) {
        let number = parseInt(prompt('Inserisci un numero da 0 a 9'));
        if (isNaN(number) || number === "" || number === undefined || number < 0 || number > 9) {

        } else if(userNumbersList.includes(number)){

        }else{
            userNumbersList.push(number);

            if (pcNumbersList.includes(number)) {
                matchNumbersList.push(number);
            };
        };
    };

    if (matchNumbersList.length === 0) {
        el('h1').innerHTML = `Hai una pessima memoria!! Non hai indovinato nessun numero!!`
    } else {
        el('h1').innerHTML = `Bravo hai ricordato ${matchNumbersList.length} numeri! I numeri indovinati sono:`

        for (i = 0; i < matchNumbersList.length; i++) {
            el('h1').innerHTML += ` ${matchNumbersList[i]}`;
        }
    }

    el('.my-output').classList.replace('d-none', 'd-block');

}, 30050);


