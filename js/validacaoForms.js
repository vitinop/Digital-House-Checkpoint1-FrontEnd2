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
const h1 = document.querySelector('h1'); // test do vini
const h3 = document.querySelector('h3'); // test do vini
const p = document.querySelector('p'); // test do vini
const img = document.querySelector('img'); // test do vini
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
         mensplaceholder.push('Adicione um Nome!!!')
         placeholder[0].innerText = mensplaceholder;
         ic1[0].classList.add('fail');
     }
     else {
         ic1[0].classList.remove('fail');
         placeholder[0].innerText = null;
         ic1[0].classList.add('sucess');
         mensplaceholder.push('Nome do Jogo')
         placeholder[0].innerText = mensplaceholder;
         h1.innerText = gameNameForm.value;
     }
 }
//-----------gameReleaseDateForm----------------
function CheckReleaseDate(){
     let mensplaceholder = [];
     if(gameReleaseDateForm.value == 0 ){
         e.preventDefault();
         mensplaceholder.push('Adicione uma data!!!')
         placeholder[1].innerText = mensplaceholder;
         ic1[1].classList.add('fail');
     }
     else if (gameReleaseDateForm.value >= 2023 ){
         e.preventDefault();
         mensplaceholder.push('Pega leve ai John Connor!!!')
         placeholder[1].innerText = mensplaceholder;
         ic1[1].classList.add('fail');
     }
     else if (gameReleaseDateForm.value <= 1950 ){
         e.preventDefault();
         mensplaceholder.push('Sem viagens No tempo!!!')
         placeholder[1].innerText = mensplaceholder;
         ic1[1].classList.add('fail');
     }
     else {
         ic1[1].classList.remove('fail');
         placeholder[1].innerText = null;
         ic1[1].classList.add('sucess');
         mensplaceholder.push('Ano de Lançamento');
         placeholder[1].innerText = mensplaceholder;
         h3.innerText = gameReleaseDateForm.value; 
     }
}
//-----------gameDescriptionForm----------------B.O.zinho não resulvido por(vini) = validando o gameIMGForm
function CheckDescription(){
       let mensplaceholder = []
       if(gameDescriptionForm.value === '' || gameDescriptionForm.value == null){
           e.preventDefault();
           mensplaceholder.push('Adicione uma descrição test1');
           placeholder[2].innerText = mensplaceholder;
           ic1[2].classList.add('fail');
       }
       else if (gameDescriptionForm.value.maxlength >= 445) {
        e.preventDefault();
        mensplaceholder.push('Limite maximo de 445 caracteres!!!');
        placeholder[2].innerText = mensplaceholder;
        ic1[2].classList.add('fail');
       }
       else {
           ic1[2].classList.remove('fail');
           placeholder[2].innerText = null;
           ic1[2].classList.add('sucess');
           mensplaceholder.push('Descrição do Jogo test2')
           placeholder[2].innerText = mensplaceholder;
           p.innerText = gameDescriptionForm.value; 
       }
}
//------------gameIMGForm---------------B.O.zinho2 não resulvido por(vini)
function CheckIMG(){
     let mensplaceholder = []
     if (gameIMGForm.nodeValue === '' || gameIMGForm == null) {
         e.preventDefault();
         mensplaceholder.push('Adinione uma IMG com URL 111');
         placeholder[2].innerText= mensplaceholder;
         ic1[2].classList.add('fail');
     }
     else {
         ic1[2].classList.remove('fail');
         placeholder[2].innerText = null;
         ic1[2].classList.add('sucess');
         mensplaceholder.push('Link da Capa do Jogo 222')
         placeholder[2].innerText = mensplaceholder;
         img.src = gameIMGForm.value;
     }
}

})
