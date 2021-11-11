//Selecionando os IDs
let titleForm = document.querySelector('#title-form');
let descriptionForm = document.querySelector('#description-form');
let urlForm = document.querySelector('#url-form');
let form = document.querySelector('#form');

//Selecionando o input e checkbox
const radioForm = document.querySelectorAll('input[name=\'option\']');
const checkForm = document.querySelector('input[type=\'checkbox\']');

//Adicionando o evento
form.addEventListener('submit', enviar);

//Validação de seleção dos inputs
function radioSelecionado(inputs) {
    for(let i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            return inputs[i].value;
        }
    }   
} 

//Função principal
function enviar(event) {
    event.preventDefault();

    //validação dos inputs
    let radio = radioSelecionado(radioForm);
  
    //Atribuindo elemento pai 
    let wrapper = document.querySelector('#list-wrapper')
    
    //Criando os elementos do Card
    let title = document.createElement('h3');
    let description = document.createElement('span');
    let img = document.createElement('img');
    let selecao = document.createElement('span');
    let check = document.createElement('span');

    //Inserindo novos valores no documento
    title.innerHTML = titleForm.value;
    description.innerHTML = descriptionForm.value;
    img.setAttribute('src', urlForm.value);
    selecao.innerHTML = radio;
    check.innerHTML = checkForm.checked ? 'Estou apto' : 'Não estou apto';
    
    //Criando elemento DIV
    let item = document.createElement('div');

    //Criando os appendChild
    item.appendChild(title);
    item.appendChild(description);
    item.appendChild(img);
    item.appendChild(selecao);
    item.appendChild(check);
    
    //Atrinbuindo itens no Card
    wrapper.appendChild(item);
}