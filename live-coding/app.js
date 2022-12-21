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


todos.forEach(todo => {
  let todoEntry = createTodoCard(todo);
  todoContainer.append(todoEntry);
});