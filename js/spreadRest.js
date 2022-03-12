//Rest Operator, spread operator ...
const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);
function sum (...rest) {
    // return args.reduce((acc, value) => acc + value, 0)
    return multiply(...rest);
};

console.log(sum(5, 10, 3));

// Strings, arrays, literal objects, e objetos interaveis
const str = 'DIO';
const arr = [1, 2, 3, 4, 5];
// const arr2 = arr.concat([6, 7, 8])
const arr2 = [...arr, 6, 7, 8];

function LogArgs(...logs) {
// function LogArgs(a, b, c) { //arr
console.log(...logs);
// console.log(a, b, c); // arr
}

LogArgs(...str);
console.log(arr2);

const obj = { test: 123 };
// podemos criar um Shalow clone, onde as mudanças feitas não afetam o original
const obj2 = { test: 456 }; 
// const obj2 = obj; // Nesse caso, as alterações vão refletir no objeto orignal
// obj2.test = 456;  

const obj3 = {
    ...obj,
    test2: 'hello'
};
// Atenção na ordem em que é usado, pois pode sobrescrever informações
const objMerged = {...obj, ...obj2 };

const nestedObj = {
    test: 123,
    subObj: {
        test: 123
    }
};

const nObj = { ...nestedObj, subObj: { ...nestedObj.subObj } };

nObj.subObj.test = 456;

console.log(nestedObj);
