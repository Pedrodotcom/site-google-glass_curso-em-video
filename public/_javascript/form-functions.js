function calc_total() {
    let qtd = document.querySelector('input#quantPedido').value
    let valor = Number(qtd) * 1500
    document.querySelector('input#precoPedido').value = valor
}

function opacity() {
    let adressComplement = document.querySelector('input#complem')
    let adressComplementLabel = document.querySelector('label#complemLabel')
    adressComplement.style.opacity = 1
    adressComplementLabel.style.opacity = 1
}

function checkFields(event) {
    const fieldsToCheck = [
            "name",
            "email",          
            "nSex",
            "birth",
            "adress",
            "adressNum",
            "state",
            "city",
            "mUrg",
            "msg"
    ]

    const isEmpty = fieldsToCheck.find(function(fields) {
        const checkIfisEmpty = !event.target[fields].value.trim()
        if(checkIfisEmpty) {
            return true
        }
    })

    if(isEmpty){
        event.preventDefault()
        alert("Por favor, preencha todos os campos obrigatórios.")
    }
    
    alert("Mensagem enviada com sucesso")
}