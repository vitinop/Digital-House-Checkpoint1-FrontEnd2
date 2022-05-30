"use strict";

let botaoSubimit = document.getElementById("submit");

// const submit = document.getElementById('submit');

// json Cards
let cardInfoBank = [
  {
    setGameIMGForm:
      "https://king.host/blog/wp-content/uploads/2018/12/2018-12-27-img-blog-teste-ab-1280x720.png ",
    setGameNameForm: "a ",
    setGameReleaseDateForm: "a",
    setGameDescriptionForm: "a",
  },
  {
    setGameIMGForm:
      "https://king.host/blog/wp-content/uploads/2018/12/2018-12-27-img-blog-teste-ab-1280x720.png ",
    setGameNameForm: "a ",
    setGameReleaseDateForm: "a",
    setGameDescriptionForm: "a",
  },
  {
    setGameIMGForm:
      "https://image.api.playstation.com/cdn/UP0102/CUSA04772_00/cxd9vkFOAHVwwYG7lQKENGkrfyoAChNh.png ",
    setGameNameForm: "Resident Evil 7 ",
    setGameReleaseDateForm: "2018",
    setGameDescriptionForm: " texto amostra ",
  },
  {
    setGameIMGForm:
      "https://image.api.playstation.com/cdn/UP0102/CUSA04772_00/cxd9vkFOAHVwwYG7lQKENGkrfyoAChNh.png ",
    setGameNameForm: "Resident Evil 7 ",
    setGameReleaseDateForm: "2018",
    setGameDescriptionForm: " texto amostra ",
  },
];

// Renderizando os cards via Js - Através do JSON
const criarItemCard = (
  setGameIMGForm,
  setGameNameForm,
  setGameReleaseDateForm,
  setGameDescriptionForm
) => {
  const newCard = document.createElement("div");
  newCard.classList.add("individualGamecard");
  newCard.innerHTML = `
  
  <img src='${setGameIMGForm}' />
      <div class="text">
        <h1>${setGameNameForm}</h1>
        <h3 class="animate-text">${setGameReleaseDateForm}</h3>
        <p class="animate-text">${setGameDescriptionForm}</p>
      </div>
  `;

  document.getElementById("gameCardsSection").appendChild(newCard);
};

// Resetador do ultimo card da lista dos cards
const limparCards = () => {
  const listaCards = document.getElementById("gameCardsSection");
  while (listaCards.firstChild) {
    listaCards.removeChild(listaCards.lastChild);
  }
};

// Ao atualizar um card um ultimo card da lista é apagado
const atualizarItens = () => {
  limparCards();
  cardInfoBank.forEach((item) =>
    criarItemCard(
      item.setGameIMGForm,
      item.setGameNameForm,
      item.setGameReleaseDateForm,
      item.setGameDescriptionForm
    )
  );
};

// Adiciona um novo card no Json com o evento submit -- FALTA ARRUMAR daqui pra baixo ta bugado

function inserirNovoItemNoJson(
  getGameIMGForm,
  getGameNameForm,
  getGameReleaseDateForm,
  getGameDescriptionForm
) {
  

  let getGameIMGFormValue = document.getElementById("gameIMGForm");
  let getGameNameFormValue = document.getElementById("gameNameForm");
  let getGameReleaseDateFormValue = document.getElementById("gameReleaseDateForm");
  let getGameDescriptionFormValue = document.getElementById("gameDescriptionForm");

  let newObjCard = {
    setGameIMGForm: getGameIMGFormValue.value,
    setGameNameForm: getGameNameFormValue.value,
    setGameReleaseDateForm: getGameReleaseDateFormValue.value,
    setGameDescriptionForm: getGameDescriptionFormValue.value,
  };
 
  //atualizaçao forçada ao adicionar novo item
  cardInfoBank.push(newObjCard);
  atualizarItens();
  

  // Limpar o Campo subimit
  getGameIMGFormValue.value ='';
  getGameNameFormValue.value='';
  getGameReleaseDateFormValue.value='';
  getGameDescriptionFormValue.value=''
}

botaoSubimit.addEventListener("click",(event)=>{

  event.preventDefault()

    inserirNovoItemNoJson()
    
} );

atualizarItens();
