// Destructuring assignment
var arr = [ 'Apple', 'Banana', 'Orange', [ 'tomato' ] ];
var apple = arr[0]

var [ apple2, banana2, orange2, [ tomato ] ] = 
[ 'Apple', 'Banana', 'Orange', [ 'tomato' ] ];
console.log( tomato );

var obj = { nome: 'Gabriel', props: { age: 21, color: ['black'] } };
// var { nome } = obj;
var { nome: nome2 } = obj;
var { props: { age, color: [black] } } = obj;

console.log( nome2, age, black );

// functions

function sum( [ a, b ] = [ 0, 0 ] ) { 
    return a + b;
};
