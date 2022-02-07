import Todos from "./components/Todos";
import Todo from "./models/Todo";
import NewTodo from "./components/NewTodo";

function App() {
  const todos = [new Todo("Learning React"), new Todo("Learning TypeScript")];
  const newTodoHandler = (text: string) => {};
  return (
    <div>
      <NewTodo onAddTodo={newTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
