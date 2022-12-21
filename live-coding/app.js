const todoContainer = document.querySelector(".todo-container");

function createTodoCard(entry) {
  let card = document.createElement("div");
  card.className = "todo-card";

  let cardHeader = document.createElement("h2");
  cardHeader.className = "card-header";
  cardHeader.textContent = entry.title;

  let cardContent = document.createElement("p");
  cardContent.className = "card-content";
  cardContent.textContent = entry.text;

  card.append(cardHeader, cardContent);

  return card;
}

function createTodos() {
  let todos = [
    {
      title: "Must do",
      text: "Today must do today"
    },
    {
      title: "Must do #2",
      text: "Today must do today, Today must do today"
    }
  ];
  return todos;
}


let todos = createTodos();

todos.forEach(todo => {
  let todoEntry = createTodoCard(todo);
  todoContainer.append(todoEntry);
});