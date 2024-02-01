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
  let html = "";
  listArray.forEach((item) => {
    html += buildListItem(item);
  });
  list.innerHTML = html;
}

function buildListItem(item) {
  let html = "";
  html += `<li><h2>${item.description}</h2>`;
  html += `<h3>Author: ${item.author}</h3>`;
  html += `<label>Done:</label>`;
  html += `<input type="checkbox" id="${item.id}"><br>`;
  html += `<span class="button-section">`;
  html += `<span class="nav-btn">`;
  html += `<button class="btn-move material-symbols-outlined" id="up">
north
</button><button class="btn-move material-symbols-outlined" id="down">
south
</button>`;
  html += "</span>";
  html += `<button class="btn-delete material-symbols-outlined" id="delete">
delete</button></span></li>`;
  return html;
}

const list = document.querySelector(".todo-list");
list.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON" && e.target.id === "up") {
    let index = findIdx(e);
    moveUp(index);
  } else if (e.target.tagName === "BUTTON" && e.target.id === "down") {
    let index = findIdx(e);
    moveDown(index);
  } else if (e.target.tagName === "BUTTON" && e.target.id === "delete") {
    let index = findIdx(e);
    removeListItem(index);
  }
});

function moveUp(index) {
  if (index !== 0 && listArray.length > 1) {
    let tempHolder = listArray[index];
    listArray[index] = listArray[index - 1];
    listArray[index - 1] = tempHolder;
    updateList();
    return true;
  } else {
    return "Can't move this";
  }
}

function moveDown(index) {
  if (index !== listArray.length - 1 && listArray.length > 1) {
    let tempHolder = listArray[index];
    listArray[index] = listArray[index + 1];
    listArray[index + 1] = tempHolder;
    updateList();
    return true;
  } else {
    return "Can't move this";
  }
}

function findIdx(e) {
  let index = 0;
  for (let counter = 0; counter < list.children.length; counter++) {
    if (list.children[counter].innerHTML == e.target.parentNode.innerHTML) {
      index = counter;
    }
  }
  return index;
}

function removeListItem(index) {
  if (typeof listArray[index] !== "undefined") {
    listArray.splice(index, 1);
    updateList();
  }
}
