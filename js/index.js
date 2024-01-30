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
}

function buildListItem(item) {
  let html = "";
  html += `<li><h2>${item.description}</h2>`;
  html += `<h3>Author: ${item.author}</h3>`;
  html += `<label>Done:</label>`;
  html += `<input type="checkbox" id="${item.id}"><br>`;
  html += `<button id="up">Move Up</button><button id="down">Move Down</button></li>`;
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
  console.log(list.children[0], e.target.parentNode, list.children.length);
  for (let counter = 0; counter < list.children.length; counter++) {
    if (list.children[counter].innerHTML == e.target.parentNode.innerHTML) {
      index = counter;
    }
  }
  return index;
}

// function moveUp(element) {
//   const list = Array.from(document.querySelector(".todo-list").children);
//   console.log(element, list[1]);

//   if (list.length > 1) {
//     let temp;
//     let currentIndex = 0;

//     for (let index = 0; index < list.length; index++) {
//       if (element === list[index]) {
//         currentIndex = index;
//         break;
//       }
//     }

//     if (currentIndex !== 0) {
//       temp = list[currentIndex - 1].innerHTML;
//       list[currentIndex - 1].innerHTML = element.innerHTML;
//       element.innerHTML = temp;
//       console.log(temp);
//     }
//   } else {
//     return "List is too short to move anything";
//   }

//   return true;
// }
