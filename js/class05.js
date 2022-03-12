function botao(){
    document.getElementById("vlw").innerHTML = "Obrigado Por clicar"
    // alert("Obrigado por clicar")
}

function redirect(){
    window.open("https://globallab.org/en/#.YPJbSehKjDc")
    // window.location.href = "https://globallab.org/en/#.YPJbSehKjDc"
}

function over(element){
    // document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
    element.innerHTML = "Obrigado por passar o mouse"
    // alert("trocar texto")
}

function down(element){
    // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
    element.innerHTML = "Passe o mouse aqui"
}

function mudar(element){
    console.log(element.value)
}