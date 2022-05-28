'use strict';

// getGameIMGForm = document.getElementById('gameIMGForm');
// getGameNameForm = document.getElementById('gameNameForm');
// getGameReleaseDateForm = document.getElementById('gameReleaseDateForm');
// getGameDescriptionForm = document.getElementById('gameDescriptionForm');

// const submit = document.getElementById('submit');
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


const limparCards=() => {
  const listaCards= document.getElementById('gameCardsSection');
  while (listaCards.firstChild)
  {
    listaCards.removeChild(listaCards.lastChild)
  }


}
const atualizarItens = () => {
  limparCards();
  cardInfoBank.forEach(item => criarItemCard (item.setGameIMGForm, item.setGameNameForm, item.setGameReleaseDateForm , item.setGameDescriptionForm));
  
}

const inserirNovoItem = () =>{
  document.getElementById('submit').onclick(cardInfoBank.push({}));
}



atualizarItens ();
