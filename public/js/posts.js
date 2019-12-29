const getPosts = async () =>{
    return await fetch('/posts')
    .then((response) => response.json())
    .then((data) => {
        return data
    });
}
