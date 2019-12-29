let addPostBtn = document.querySelector('.create-post-btn');
let logOutBtn = document.querySelector('.log-out-btn')


document.addEventListener('DOMContentLoaded', async function () {
    addPosts();
    addCallback();
    addEmails();


})

addPostBtn.addEventListener('click', () =>{
    let articlesTab = document.querySelector('#v-pills-articles')
    articlesTab.classList.remove('show')
    articlesTab.classList.remove('active');
    let createPostTab = document.querySelector('#v-pills-create-post')
    createPostTab.classList.add('show')
    createPostTab.classList.add('active'); 
})

async function addPosts(){
    let posts = await getPosts();
    let articles = document.querySelector('.articles');
    articles.innerHTML = '';
    let i = 1;
    posts.forEach((post) => {
        let postHTML = `
    <article class="d-flex justify-content-between align-items-center article-inline">
        <div class="num w5">${i++}</div>
        <input class="id" type="hidden" value="${post.id}">
        <div class="name w30">${post.title}</div>
        <div class="date w30">${post.date}</div>
        <div class="country w20">${post.country}</div>
        <div class="edit w10"><button class="btn btn-link btn-edit">Edit</button></div>
        <div class="remove w5"><button class="btn btn-link btn-remove">X</button></div>
    </article>`;
        articles.insertAdjacentHTML('beforeend', postHTML)
    })
}

async function addCallback(){
    let requests = await getCallbackRequests();
    let requestBlock = document.querySelector('#v-pills-callback');
    requestBlock.innerHTML = '';
    let i = 1;
    requests.forEach((request) => {
        let requestHTML = `
    <article class="d-flex justify-content-between align-items-center article-inline">
        <div class="num w5">${i++}</div>
        <input class="id" type="hidden" value="${request.id}">
        <div class="name w60">${request.phoneNumber}</div>
        <div class="date w30">${request.date}</div>
        <div class="remove w5"><button class="btn btn-link btn-remove">X</button></div>
    </article>`;
        requestBlock.insertAdjacentHTML('beforeend', requestHTML)
    })
}

async function addEmails(){
    let emails = await getEmailsRequests();
    let emailsBlock = document.querySelector('#v-pills-mail');
    emailsBlock.innerHTML = '';
    let i = 1;
    emails.forEach((email) => {
        let emailHTML = `
    <article class="d-flex justify-content-between align-items-center article-inline">
        <div class="num w5">${i++}</div>
        <input class="id" type="hidden" value="${email.id}">
        <div class="name w30">${email.name}</div>
        <div class="email w30">${email.email}</div>
        <div class="date w30">${email.date}</div>
        <div class="remove w5"><button class="btn btn-link btn-remove">X</button></div>
        <div class="text w100">${email.text}</div>
    </article>`;
        emailsBlock.insertAdjacentHTML('beforeend', emailHTML)
    })
}

logOutBtn.addEventListener('click', () =>{
    document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
    window.location.href = '/'
})


