
let calcular = document.getElementById('calcular')


function imc() {
    let nome = document.getElementById('nome').value
    let altura = document.getElementById('altura').value
    let peso = document.getElementById('peso').value
    let resultado = document.getElementById('resultado')

    if(nome !== "" & altura !== "" & peso !== ""){

        if (altura > 3) {
            altura = altura / 100
        }

        let valorIMC = (peso / (altura * altura)).toFixed(1)

        let classificacao = ""

        if (valorIMC < 18.5) {
            classificacao = "Abaixo do Peso Ideal !"
        }else if(valorIMC < 24.5){
            classificacao = "No Peso Ideal !"
        }else if(valorIMC < 29.9){
            classificacao = "Com Sobrepeso !"
        }else if(valorIMC < 34.9){
            classificacao = "Com Obesidade Grau I "
        }else if(valorIMC < 39.9){
            classificacao = "Com Obesidade Grau II "
        }else {
            classificacao = "Com Obesidade Mórbida ! Cuide-se Urgentemente !"
        }

        
        resultado.textContent = `${nome} , Seu IMC é ${valorIMC} e você está ${classificacao}`

    } else {
        resultado.textContent = "Preencha todos os campos"
    }
}

calcular.addEventListener('click', imc)

function recarregar(){
    document.getElementById('nome').value = ""
    document.getElementById('altura').value = ""
    document.getElementById('peso').value = ""
    location.reload()
}