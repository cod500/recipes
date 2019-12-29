let emailRequestForm = document.querySelector('.email-request-form')

emailRequestForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    fetch('http://localhost:4000/emails', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: document.querySelector('#name').value,
            email: document.querySelector('#email').value,
            text: document.querySelector('#message').value
        })
    }).then((response) =>{
        response.text().then((data) =>{
            console.log(data)
        })
    })
})