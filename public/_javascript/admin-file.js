let messages = document.querySelector('div.message')

function deletingMessage (event){
    event.preventDefault()
    for (message in messages) {
        //message.setAtributte({appear: false})
        if (message.appear == false) {
            message.style.display = "none"
        }
    }
    
}

function verifyAnswer(event) {
    let answer = document.getElementsByTagName('textarea')[0].value
    if (answer.length == 0) {
        event.preventDefault() //Impede que o usuário seja redirecionado caso a resposta não seja enviada.
        alert('Preencha a resposta antes de enviá-la.')
    } else {
        alert('Resposta enviada com sucesso.')
    }
}