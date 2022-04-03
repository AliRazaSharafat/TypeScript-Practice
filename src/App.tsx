import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import TodosProvidor from "./store/todos-context";

function App() {
  return (
    <TodosProvidor>
      <NewTodo />
      <Todos />
    </TodosProvidor>
  );
}

export default App;
