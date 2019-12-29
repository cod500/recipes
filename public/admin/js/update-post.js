{
    let articlesBlock = document.querySelector('.articles');
    let updateForm = document.querySelector('.update-post-form');
    let titleInput = document.querySelector('#update-title');
    let textArea = document.querySelector('#update-text');
    let id;

    articlesBlock.addEventListener ('click', async (e) =>{
        if(e.target.classList.contains('btn-edit')){
            id = e.target.parentNode.parentNode.querySelector('.id').value;
            let postInfo = await fetch('/posts/' + id)
            .then((response) => {
                return response.json()
            })
            .then((data) =>{
                return data
            })

                
            titleInput.value = postInfo.title;
            textArea.value = postInfo.text;

            let articlesTab = document.querySelector('#v-pills-articles')
            articlesTab.classList.remove('show')
            articlesTab.classList.remove('active');
            let updatePostTab = document.querySelector('#v-pills-update-post')
            updatePostTab.classList.add('show')
            updatePostTab.classList.add('active');
        }
    })

    updateForm.addEventListener('submit', (e) =>{
        e.preventDefault();
        fetch('/posts/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type' :'application/json'
            },
            body: JSON.stringify({
                title: titleInput.value,
                text: textArea.value,
                description: textArea.value.substring(0, textArea.value.indexOf('.') +1)
            })
        }).then((response) => response.text())
        .then(() => window.history.go())
    })
}