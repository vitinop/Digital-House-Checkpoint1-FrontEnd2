'use strict';

// getGameIMGForm = document.getElementById('gameIMGForm');
// getGameNameForm = document.getElementById('gameNameForm');
// getGameReleaseDateForm = document.getElementById('gameReleaseDateForm');
// getGameDescriptionForm = document.getElementById('gameDescriptionForm');

// const submit = document.getElementById('submit');



// json Cards
let cardInfoBank = [
    {
      'setGameIMGForm' :'https://king.host/blog/wp-content/uploads/2018/12/2018-12-27-img-blog-teste-ab-1280x720.png ',
      'setGameNameForm' :'a ',
      'setGameReleaseDateForm': 'a',
      'setGameDescriptionForm':'a',
    },
    {
      'setGameIMGForm' :'https://king.host/blog/wp-content/uploads/2018/12/2018-12-27-img-blog-teste-ab-1280x720.png ',
      'setGameNameForm' :'a ',
      'setGameReleaseDateForm': 'a',
      'setGameDescriptionForm':'a',
    },

];

// Criando os cards via Js
const criarItemCard = (setGameIMGForm, setGameNameForm, setGameReleaseDateForm,setGameDescriptionForm ) => {
  const newCard= document.createElement('div');
  newCard.classList.add('individualGamecard');
  newCard.innerHTML =`
  
  <img src='${setGameIMGForm}' />
      <div class="text">
        <h1>${setGameNameForm}</h1>
        <h3 class="animate-text">${setGameReleaseDateForm}</h3>
        <p class="animate-text">${setGameDescriptionForm}</p>
      </div>
  `

  document.getElementById('gameCardsSection').appendChild(newCard);
}


// Resetador do ultimo card da lista dos cards
const limparCards=() => {
  const listaCards= document.getElementById('gameCardsSection');
  while (listaCards.firstChild)
  {
    listaCards.removeChild(listaCards.lastChild)
  }

}

// Ao atualizar um card um ultimo card da lista é apagado
const atualizarItens = () => {
  limparCards();
  cardInfoBank.forEach(item => criarItemCard (item.setGameIMGForm, item.setGameNameForm, item.setGameReleaseDateForm , item.setGameDescriptionForm));
  
}

// Adiciona um novo card com o evento submit
const inserirNovoItem = () =>{
  document.getElementById('submit').onclick(cardInfoBank.push({}));
}



atualizarItens ();
