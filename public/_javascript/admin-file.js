function deletingMessage(event){
    if (confirm(`Você deseja apagar a mensagem? Essa ação não pode ser revertida.`) == false){
        event.preventDefault()
    } else {
        return true
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