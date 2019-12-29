const getEmailsRequests = async () =>{
    return await fetch('http://localhost:4000/emails')
    .then((response) => response.json())
    .then((data) =>{
        return data
    })
}

let emailsBlock = document.querySelector('#v-pills-mail');

emailsBlock.addEventListener('click', (e) =>{
    if(e.target.classList.contains('btn-remove')){
        let id = e.target.parentNode.parentNode.querySelector('.id').value;
        fetch('http://localhost:4000/emails/' + id, {
            method: 'DELETE'
        }).then((response) =>{
            response.text().then(() =>{
                window.history.go()
            })
        })
    }
})
