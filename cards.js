var create = document.getElementById("create");
var userInput = document.getElementById("input");
var remove = document.getElementById("delete");

create.addEventListener("click", createCard);
remove.addEventListener("click", closeCard);

function createCard() {
  var card = document.createElement("div");
  var id = document.createAttribute("id");
  id.value = "output";
  card.setAttributeNode(id);
  document.getElementById("cards").appendChild(card);
}


function closeCard() {
  var top = document.getElementById("top");
  var card = document.getElementById("cards");
  var throwaway = top.removeChild(card);
}

