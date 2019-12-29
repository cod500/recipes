let callMeForm = document.querySelector('.call-me-form')

document.addEventListener('DOMContentLoaded', async function () {
    let posts = await getPosts();
    let articles = document.querySelector('.articles');
    articles.innerHTML = '';
    posts.forEach((post) => {
        let postHTML = `
        <div class="col-4">
        <div class="card">
            <img class="card-img-top" src="${post.imageURL}"alt="${post.title}">
            <div class="card-body">
                <h4 class="card-title">${post.title}</h4>
                <p class="card-text">${post.description}</p>
                <a href="/site/?id=${post.id}" class="btn btn-primary">Details</a>
            </div>
        </div>
    </div>`;
        articles.insertAdjacentHTML('beforeend', postHTML)
    })
})

callMeForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    let phoneInput = callMeForm.querySelector('input')

    fetch('http://localhost:4000/callback', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            phoneNumber: phoneInput.value
        })
    }).then((response) =>{
       return response.text()
        }).then(() =>{
            alert('Call you back soon')
    })
})

