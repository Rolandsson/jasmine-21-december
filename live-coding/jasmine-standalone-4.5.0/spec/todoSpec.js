describe("Testing todo history", function () {
  it("length of two when initialized", function () {
    addTodoEntry({ title: "Must do", text: "Today must do today" });
    addTodoEntry({ title: "Must do #2", text: "Today must do today, Today must do today" });

    expect(getSizeOfTodo()).toBe(2);
  });
});