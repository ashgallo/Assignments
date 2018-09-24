var addForm = document.querySelector("#add-form");
var todoList = document.querySelector("todo-list");

addform.addEventListener("submit", handleSubmit)
function handleSubmit(e) {
  e.preventDefault();
  var todo = {
    title: this.title.value,
    description : this.description.value
  }
  displayTodoItem(todo);
  addForm.reset();

  function displayTodoItem(todo) {
    var container = document.createElement("div");
    container.classList.add("todo-item-container");

    var h4 = document.createElement("h4");
    h4.innerText = todo.title;

    var label = document.createElement("label");
    label.innerText = "Completed: ";
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("input", handleCompleted);

    function handleCompleted(e) {
      label.classList.toggle("completed");
    }
    var desc = document.createElement("p");
    desc.innerText = todo.description;
  }
}