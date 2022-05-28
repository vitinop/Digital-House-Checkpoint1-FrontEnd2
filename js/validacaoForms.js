const gameNameForm = document.getElementById('gameNameForm');
const gameReleaseDateForm = document.getElementById('gameReleaseDateForm');
const formulario = document.getElementById('formulario');
const gameDescriptionForm = document.getElementById('gameDescriptionForm');
const gameIMGForm = document.getElementById('gameIMGForm');
const error = document.querySelectorAll('.error');

formulario.addEventListener('submit', (e) =>{

   checkName();

function checkName(){
   
    if(gameNameForm.value === '' || gameNameForm.value == null){
        e.preventDefault();
        
        formulario[0].classList.add('fail')
    } 
    else{
        formItem[0].classList.remove('fail');
        formItem[0].classList.add('sucess');
    }
}


})


