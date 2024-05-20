import { useRef, useState } from "react";
import TodoCard from "./assets/components/TodoCard";
import TodoList from "./assets/components/TodoList";
import newList from "./assets/components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);
  
  return (
    <div className="App">
      <TodoCard todoList={todoList} setTodoList={setTodoList}/>
      <TodoList todoList={todoList} setTodoList={setTodoList}/>
    </div>
  );
}

export default App;