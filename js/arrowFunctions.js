var sumOld = function(a, b) {
    return a + b;
};

//  Arrow Functions

// var sum = (a, b) => a + b // Caso não hajam declarações, podemos omitir o bloco
// var sum = a => a + 5 // Caso haja apenas um parametro, podemos omitir os parenteses. Exceções: ({ a }); (...a)

var sum = (a, b) => {
    var x = 10;

    if (a < b) {
        return a + b;
    } else {
        return a - b;
    }
};

// console.log(sum(1, 5));

// Retornando Objetos literais com retorno implicito
var createObj = () => ({ test: 123 });

console.log(createObj())
