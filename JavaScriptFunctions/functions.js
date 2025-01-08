/* Aufgabe 1. Finde das größte und kleinste Element in einem Array: Schreibe eine Funktion findMinMax(arr), die ein Array von Zahlen als Eingabe erhält und das kleinste sowie das größte Element im Array zurückgibt. */

function findMinMax(array) {
    let min = array.find(element => element === Math.min(...array));
    let max = array.find(element => element === Math.max(...array));
    return { min: min, max: max };
}

console.log(findMinMax([5, 3, 8, 1, 2]));

/* 2. Flache ein verschachteltes Array: Schreibe eine Funktion flattenArray(arr), die ein Array von Arrays beliebiger Tiefe flach macht. */

function flattenArray(array) {
    return array.flat(Infinity);
}

console.log(flattenArray([1, [2, [3, 4]], 5, [6, [7]]]));

/* 3. Filtere Duplikate aus einem Array: Schreibe eine Funktion removeDuplicates(arr), die alle Duplikate aus einem Array entfernt und ein Array mit nur eindeutigen Werten zurückgibt. */

function removeDuplicates(array) {
    return Array.from(new Set(array)); 
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); 

/* 4. Sortiere ein Array von Objekten nach einem bestimmten Attribut: Schreibe eine Funktion sortByAttribute(arr, attribute), die ein Array von Objekten nach einem bestimmten Attribut sortiert. */

function sortByAttribute(arr, attribute) {
    return arr.sort((a, b) => a[attribute] - b[attribute]);
}

const users = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Mike", age: 35 }
];

console.log(sortByAttribute(users, "age"));

