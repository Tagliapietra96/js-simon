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

function result(user, match, hideEl, showEl, ) {

}

// VARIABILI *********************************************************

const pcNumbersList = getRandomList(0, 9, 5);
const userNumbersList = [];
const matchNumbersList = [];

// EVENTI ***********************************************************

for (i = 0; i < pcNumbersList.length; i++) {
    el(`#n-${i + 1}`).innerHTML = pcNumbersList[i];
};

