class ListObject {
  constructor(id, description, author) {
    this.description = description;
    this.author = author;
    this.id = id;
  }
}

const listArray = [];

const btn = document.getElementById("submitListItem");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  let text = document.getElementById("description").value;
  let author = document.getElementById("author").value;
  let id = listArray.length + 1;

  listArray.push(new ListObject(id, text, author));
  updateList();
});

function updateList() {
  const list = document.querySelector(".todo-list");
  console.log(list);
  let html = "";
  listArray.forEach((item) => {
    console.log(item);
    html += buildListItem(item);
  });
  list.innerHTML = html;
  listArray.forEach((item) => {
    setupMovement(item);
  });
}

function buildListItem(item) {
  let html = "";
  html += `<li><span class="left-section"><h2>${item.description}</h2>`;
  html += `<h3>Author: ${item.author}</h3>`;
  html += `<label>Done:</label>`;
  html += `<input type="checkbox" id="${item.id}"></span><br>`;
  html += `<button id="up-${item.id}">Move Up</button><button id="down-${item.id}">Move Down</button></li>`;
  return html;
}

function setupMovement(item) {
  const btnUp = document.querySelector(`#up-${item.id}`);
  const btnDown = document.querySelector(`#down-${item.id}`);

  btnUp.addEventListener("click", (e) => {
    console.log("up");
  });
  btnDown.addEventListener("click", (e) => {
    console.log("down");
  });
}
