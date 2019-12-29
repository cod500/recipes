const getCallbackRequests = async () =>{
    return await fetch('/callback')
    .then((response) => response.json())
    .then((data) => {
        return data
    });
}

let requestsBlock = document.querySelector('#v-pills-callback');

requestsBlock.addEventListener('click', (e) =>{
    if(e.target.classList.contains('btn-remove')){
        let id = e.target.parentNode.parentNode.querySelector('.id').value;
        fetch('/callback/' + id, {
            method: 'DELETE'
        }).then((response) =>{
            response.text().then(() =>{
                window.history.go()
            })
        })
    }
})
