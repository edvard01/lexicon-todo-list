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
  let text = document.getElementById("description");
  let author = document.getElementById("author");
  let id = listArray.length + 1;

  listArray.push(new ListObject(id, text, author));
});

function updateList() {}
