let array = []

function enviar () {
    let numero = Number(document.querySelector('.number').value)
    let div1 = document.querySelector('.campo-lista')
    let div2 = document.querySelector('.campo-resumo')

    div2.innerHTML = ''

    if (numero == '' || numero < 1 || numero > 100) {

        alert('Insira um numero entre 0 e 100')

    } else if (array.find(function (item) {

        if (item == numero) {
            return true
        } else {
            return false
        }

    })) {
        alert ('O número informado já se encontra na lista')
    }
    
    else {
        array.push(numero)
        div1.innerHTML += `O número ${numero} foi adicionado a lista <br>`
    }

}

function finalizar () {

    if (array == '') {

        alert('Adicione valores antes de finalizar')

    } 
    
    
    else {

        let div2 = document.querySelector('.campo-resumo')
        let arrayL = array.length
        let arrayS = 0
        let arrayM = 0
        let arrayMenor = ''
        let arrayMaior = ''

        for (let c = 0; c < arrayL; c++) {
            arrayS += array[c]
            if (arrayMaior < array[c]) {
                arrayMaior = array[c]
            }
            if (c == 0) {
                arrayMenor = array[c]
            } else if (arrayMenor > array[c]) {
                arrayMenor = array[c]
            }
        }

        arrayM = arrayS / arrayL

        div2.innerHTML = `Existem ${arrayL} números dentro da lista <br>`
        div2.innerHTML += `A soma entre todos os números da lista é igual a ${arrayS}<br>`
        div2.innerHTML += `A média entre todos os números da lista é igual a ${arrayM}<br>`
        div2.innerHTML += `O maior número na lista é igual a ${arrayMaior}<br>`
        div2.innerHTML += `O menor número na lista é igual a ${arrayMenor}`

        
    }


    
}