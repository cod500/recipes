let signInForm = document.querySelector('.sign-in-form');
let registerForm = document.querySelector('.register-form');

signInForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    let email = document.getElementById('sign-in-email').value;
    let password = document.getElementById('sign-in-password').value;
    
    fetch('http://localhost:4000/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: email, password: password})
    }).then((response) =>{
        if(response.status === 400){
            throw new Error();
        }
        return response.json();
    }).then((data) =>{
        window.location.href = data.redirectURL;
    }).catch(() =>{
        alert('Wrong email or password')
    })
})

registerForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    let email = document.getElementById('register-email').value;
    let password = document.getElementById('register-password').value;
    let rePassword = document.getElementById('register-re-enter-password').value;

    if(password !== rePassword){
        return;
    }

    fetch('http://localhost:4000/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: email, password: password})
    }).then((response) =>{
        response.text().then((data) =>{
            alert(data)
        })
    })
})

