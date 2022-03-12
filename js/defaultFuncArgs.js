// Atribuindo valores padrões para funções
// function multiply(a, b = 1) {
    
function multiply(a, b) {
    // caso b seja = 0 retorna false e o valor de 1 é atribuido,
    // gerando um comportamento side effect

    // b = b || 1;
    b = typeof b === 'undefined' ? 1 : b // Retorna o valor esperado

    return a * b;
}

console.log(multiply(5, 0))