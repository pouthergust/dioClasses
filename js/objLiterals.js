var prop1 = 'DIO';
var propName = 'Teste';

function method() {
    console.log('method called');
};

var obj = {
    // prop1: prop1
    prop1, // Caso o valor tenha o nome da chave podemos omiti-lo
    method,
    [propName + 'concat']: 'prop value',
    sum: function(a, b) { return a + b }, // shorthand para chamada de metodos em obj
    multiply(a, b) { return a * b } // Outro shorthand para chamada de metodos em obj
};

console.log(obj)
obj.method()
console.log(obj.sum(2, 5));
console.log(obj.multiply(2, 5));