let form = document.getElementById('form');
let input = document.getElementById('input');
let msg = document.getElementById('msg');
let posts = document.getElementById('posts');
form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('button clicked');
    formValidation();
})

let formValidation = () => {
    if (input.value === '') {
        let message = 'Post cannot be blank';
        msg.innerHTML = `${message}`;
    } else {
        msg.innerHTML = '';
        acceptData();
    }
}

let data = {};
let acceptData = () => {
    data['text' ] = input.value;
    console.log(data);
    createPost();
}

let createPost = () => {
    posts.innerHTML += `
 <div>
 <p>${data.text}</p>
 <span class="options">             
<i onclick='editPost(this)'  class="fas fa-edit" aria-hidden="true"></i>             
<i onclick='DeletePost(this)' class="fa fa-trash" aria-hidden="true"></i>             
 </span>
</div>              
`
input.value = ''
}

let DeletePost =(e)=>{
e.parentElement.parentElement.remove();
}

let editPost =(e)=>{
input.value = e.parentElement.previousElementSibling.innerHTML;
e.parentElement.parentElement.remove();
}