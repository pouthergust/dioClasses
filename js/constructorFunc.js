// Não podemos utilizar funções contrutoras como arrow Functions
function Car() {
    this.foo = 'bar';
};

/* Retorna um erro

var Car = () => {
    this.foo = 'bar';
}; */

console.log(new Car())