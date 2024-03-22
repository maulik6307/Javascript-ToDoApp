let todoArr = [];
displayItems();

function addTodo() {
  let todoItems = document.querySelector("#todo-input");
  let dateItems = document.querySelector("#todo-date");
  let todoDatetext = dateItems.value;
  let todoItemText = todoItems.value;
  todoArr.push({ item: todoItemText, duedate: todoDatetext });
  todoItems.value = "";
  dateItems.value = "";
  localStorage.setItem("Item", JSON.stringify(todoArr));
  displayItems();
}

function displayItems() {
  let containerElement = document.querySelector("#todo-container");
  let newHtml = "";
  for (let i = 0; i < todoArr.length; i++) {
    let { item, duedate } = todoArr[i];
    newHtml += `
      <span>${item}</span>
      <span>${duedate}</span>
      <button class="btn-delete" onclick="todoArr.splice(${i},1);
      displayItems();    
      ">Delete</button>
    `;
  }
  containerElement.innerHTML = newHtml;
}
