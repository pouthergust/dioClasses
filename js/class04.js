function soma(n1, n2){
    return n1 + n2
}

function setReplace(frase, nome, novoNome){
    return frase.replace(nome, novoNome)
}

function validaIdade(idade){
    var validar
    if (idade >= 18) {
        validar = true
    } else {
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade?")
console.log(validaIdade(idade))

// alert(soma(5,10))
// alert(setReplace("Hoje está uma boa noite", "noite", "tarde"))