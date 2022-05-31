const gameNameForm = document.getElementById('gameNameForm');
const gameReleaseDateForm = document.getElementById('gameReleaseDateForm');
const gameDescriptionForm = document.getElementById('gameDescriptionForm');
const gameIMGForm = document.getElementById('gameIMGForm');
const placeholder = document.querySelectorAll('.placeholder');
const ic1 = document.querySelectorAll('.ic1');
const form = document.getElementById('form');
const fail = document.querySelector('fail');
const sucess = document.querySelector('sucess');
const enviar = document.querySelector('#submit');
const span = document.querySelectorAll('span');
//----------submit-----------------
enviar.addEventListener('click', (e) =>{
   checkName();
   CheckReleaseDate();
   CheckDescription();
   CheckIMG();
//-----------gameNameForm----------------
function checkName(){
    let mensplaceholder =[];
    if(gameNameForm.value === '' || gameNameForm.value == null){
        e.preventDefault(); 
        mensplaceholder.push('Adicione um Nome!!!');
        ic1[0].classList.add('fail');
        span[0].innerText = mensplaceholder;
    }
    else {
        ic1[0].classList.remove('fail');
        ic1[0].classList.add('sucess');
        mensplaceholder.push('');
        span[0].innerText = mensplaceholder;
    }
 }
//-----------gameReleaseDateForm----------------
function CheckReleaseDate(){
    let mensplaceholder = [];
    if(gameReleaseDateForm.value == 0 ){
        e.preventDefault();
        mensplaceholder.push('Adicione uma data!');
        ic1[1].classList.add('fail');
        span[1].innerText = mensplaceholder;
    }
    else if (gameReleaseDateForm.value >= 2023 ){
        e.preventDefault();
        mensplaceholder.push('Pega leve ai John Connor!');
        ic1[1].classList.add('fail');
        span[1].innerText = mensplaceholder;
    }
    else if (gameReleaseDateForm.value <= 1950 ){
        e.preventDefault();
        mensplaceholder.push('Sem viagens No tempo!');
        ic1[1].classList.add('fail');
        span[1].innerText = mensplaceholder;
    }
    else {
        ic1[1].classList.remove('fail');
        ic1[1].classList.add('sucess');
        mensplaceholder.push('');
        span[1].innerText = mensplaceholder;
    }
}
//-----------gameDescriptionForm----------------
function CheckDescription(){
    let mensplaceholder = []
    if(gameDescriptionForm.value === '' || gameDescriptionForm.value == null){
        e.preventDefault();
        mensplaceholder.push('Adicione uma descrição, max:445');
        ic1[2].classList.add('fail');
        span[2].innerText = mensplaceholder;
    }
    else {
        ic1[2].classList.remove('fail');
        ic1[2].classList.add('sucess');
        mensplaceholder.push('');
        span[2].innerText = mensplaceholder;
       }
}
//------------gameIMGForm---------------
function CheckIMG(){
    let mensplaceholder = []
    if (gameIMGForm.Value === '' || gameIMGForm.Value == null) {
        e.preventDefault();
        mensplaceholder.push('Adinione uma imagem com uma URL');
        ic1[3].classList.add('fail');
        span[3].innerText = mensplaceholder;
    }
    else {
        ic1[3].classList.remove('fail');
        ic1[3].classList.add('sucess');
        mensplaceholder.push('test');
        span[3].innerText = mensplaceholder;
    }
}
}
)