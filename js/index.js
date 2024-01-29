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
    html += `<li><span class="left-section"><h2>${item.description}</h2>`;
    html += `<h3>Author: ${item.author}</h3>`;
    html += `<label>Done:</label>`;
    html += `<input type="checkbox" id="${item.id}"></span>`;
    html += `<span class="right-section"><h2 id="up">Move Up</h2><h2 id="down">Move Down</h2></span>`;
  });
  list.innerHTML = html;
}
