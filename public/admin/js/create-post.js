let createPost = document.querySelector('.create-post-form');
let titleInput = document.querySelector('#create-title');
let countryInput = document.querySelector('#create-country');
let imageIpnut = document.querySelector('#create-image-url');
let textInput = document.querySelector('#create-text');
let imageFile = document.querySelector('#create-image-file')


createPost.addEventListener('submit', (e) =>{
    e.preventDefault();
    let text = textInput.value;
    let data = new FormData();
    data.append('title', titleInput.value)
    data.append('country', countryInput.value)
    data.append('text', text)
    data.append('imageURL', imageIpnut.value)
    data.append('description', text.substring(0, text.indexOf('.') +1));
    data.append('imageFile', imageFile.files[0])

        fetch('/posts', {
            method: 'POST',
            body: data
        }).then((response) =>{
            response.text().then((data) =>{
                window.history.go()
            })
        })


})

imageIpnut.addEventListener('change', function (){
    disableInput(this, imageFile)
})
imageFile.addEventListener('change', function (){
    disableInput(this, imageIpnut)
})

function disableInput(input1, input2){
    if(input1.value){
        input2.disabled = true
    }
    else{
        input2.disabled = false
    }
}