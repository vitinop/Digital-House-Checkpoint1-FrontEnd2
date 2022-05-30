"use strict";

let botaoSubimit = document.getElementById("submit");

// O fluxo de dados para renderização de cards será feita atraves da leitura do nosso banco em JSON, e a partir dos intens nele inseridos, a renderezição acontece. 
// Basicamente temos duas funções primárias na aplicação, uma de renderizar os itens desse banco JSON  e
// Outra que adiciona itens no JSON, a partir do Submit acionando o evento, desde que ele passe por todos os quesitos de validação



// Banco dos Cards (JSON)
let cardInfoBank = [
  {
    setGameIMGForm:
      "https://img.elo7.com.br/product/zoom/2534209/big-poster-gamer-devil-may-cry-5-lo001-tamanho-90x60-cm-poster-gamer.jpg ",
    setGameNameForm: "Devil May Cry 5",
    setGameReleaseDateForm: "2019",
    setGameDescriptionForm: "O melhor caçador de demônios está de volta com estilo, no jogo que os fãs de ação estavam esperando. Agora inclui o conteúdo baixável Personagem Jogável: Vergil (também disponível separadamente).",
  },
  {
    setGameIMGForm:
      "https://image.api.playstation.com/cdn/UP0102/CUSA04772_00/cxd9vkFOAHVwwYG7lQKENGkrfyoAChNh.png ",
    setGameNameForm: "Resident Evil 7 ",
    setGameReleaseDateForm: "2018",
    setGameDescriptionForm: " A história segue a busca do civil Ethan Winters por sua esposa Mia, que o leva a uma mansão agrícola aparentemente abandonada e habitada pela família Baker. Ethan faz uso de armas e ferramentas na luta contra os membros da família e os \"Mofados\", uma forma humanoide de bactéria."
  },
  
];




// Renderizando os cards via Js - Através da exploração bacon JSON e renderização dos itens
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



// Resetador do ultimo card da lista dos cards a fim de evitar a repetição de itens, 
// Uma vez que essa função nao está presente, ele renderiza novamente os itens, gerando dualidades, por isso a importancia desse campo

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

// Essa função Adiciona um novo card no nosso banco JSON com o evento submit 

function inserirNovoItemNoJson() {
  let getGameIMGFormValue = document.getElementById("gameIMGForm");
  let getGameNameFormValue = document.getElementById("gameNameForm");
  let getGameReleaseDateFormValue = document.getElementById(
    "gameReleaseDateForm"
  );
  let getGameDescriptionFormValue = document.getElementById(
    "gameDescriptionForm"
  );

  let newObjCard = {
    setGameIMGForm: getGameIMGFormValue.value,
    setGameNameForm: getGameNameFormValue.value,
    setGameReleaseDateForm: getGameReleaseDateFormValue.value,
    setGameDescriptionForm: getGameDescriptionFormValue.value,
  };

  //atualizaçao forçada ao adicionar novo item
  cardInfoBank.push(newObjCard);
  atualizarItens();

  // Limpar o Campo subimit após a adição do mesmo no JSON
  getGameIMGFormValue.value = "";
  getGameNameFormValue.value = "";
  getGameReleaseDateFormValue.value = "";
  getGameDescriptionFormValue.value = "";
}

//Captura do submit através do click no botão de enviar formulário
botaoSubimit.addEventListener("click", (event) => {
  event.preventDefault();

  inserirNovoItemNoJson();
});


//forçar atualização dos itens no JSON
atualizarItens();
