const submit = document.getElementById("submit");
const searchText = document.getElementById("search");
const resultLink = document.getElementById("link");

function generateSearch(event) {
  event.preventDefault();
  resultLink.value = searchText.value;
}

submit.addEventListener("click", generateSearch);
