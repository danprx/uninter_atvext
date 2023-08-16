//Selectors

const titleInput = document.querySelector(".title-input");
const descInput = document.querySelector(".desc-input");
const placeInput = document.querySelector(".place-input");
const contactInput = document.querySelector(".contato-input");

const timeline = document.querySelector(".timeline");
const submitBtn = document.querySelector(".submit-btn");

//Functions
function addPub() {
  if (
    titleInput.value != false &&
    descInput.value != false &&
    placeInput.value != false &&
    contactInput.value != false
  ) {
    //Pub DIV
    const pub = document.createElement("div");
    pub.classList.add("pub");

    //Pub Title
    const pubTitle = document.createElement("h2");
    pubTitle.innerText = titleInput.value;
    pubTitle.classList.add("pub_title");
    pub.appendChild(pubTitle);

    //Pub Desc
    const pubDesc = document.createElement("p");
    pubDesc.innerText = titleInput.value;
    pubDesc.classList.add("pub_desc");
    pub.appendChild(pubDesc);

    //Pub Place
    const pubPlace = document.createElement("p");
    pubPlace.innerText = titleInput.value;
    pubPlace.classList.add("pub_place");
    pub.appendChild(pubPlace);

    //Pub Contato
    const pubContact = document.createElement("p");
    pubContact.innerText = titleInput.value;
    pubContact.classList.add("pub_contato");
    pub.appendChild(pubContact);

    //Append
    timeline.appendChild(pub);

    //Clear Inputs
    titleInput.value = "";
    descInput.value = "";
    placeInput.value = "";
    contactInput.value = "";
  } else {
    alert("Preencha todas as informações!");
  }
}

//Event Listeners
submitBtn.addEventListener("click", addPub);
