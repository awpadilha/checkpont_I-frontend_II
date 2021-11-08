// selecionar o elemento do campo 1
let titleForm = document.querySelector('#title-form');

// selecionar o elemento do campo 2
let descriptionForm = document.querySelector('#description-form');
// selecionar o elemento do campo 3
let urlForm = document.querySelector('#url-form');

// selecionar todos os radio buttons
const radioForm = document.querySelectorAll('input[name=\'option\']')

// selecionar todos os checkbox
const checkForm = document.querySelectorAll('input[type=\'checkbox\']');

// selecionar o elemento do botão
let form = document.querySelector('#form');

//atrinuir um event listener
form.addEventListener('submit', enviar);

function radioSelecionado(inputs) {
    for(let i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            return inputs[i].value;
        }
    }    
}

function checkSelecionado(inputs) {
    for(let i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            return inputs[i].value;
        }
    }    
}

function enviar(event) {
    event.preventDefault();

    let radio = radioSelecionado(radioForm);
    let check = checkSelecionado(checkForm);
    let wrapper = document.querySelector('#list-wrapper')
    
    let title = document.createElement('h3');
    let description = document.createElement('span');
    let img = document.createElement('img');
    let selecao = document.createElement('span');

    title.innerHTML = titleForm.value;
    description.innerHTML = descriptionForm.value;
    img.setAttribute('src', urlForm.value);
    selecao.innerHTML = radio;

    let item = document.createElement('div');

    item.appendChild(title);
    item.appendChild(description);
    item.appendChild(img);
    item.appendChild(selecao);
    
    wrapper.appendChild(item);
}