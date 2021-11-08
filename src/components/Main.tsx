import axios from "axios";
import { useEffect, useState } from "react";
import TodoForm from "./Todo/TodoForm";
import TodoList, { Todo } from "./Todo/TodoList";

const Main = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  useEffect(() => {
    axios
      .get("https://jb-mern-todo.herokuapp.com/todos/", {
        headers: { token: localStorage.getItem("token") },
      })
      .then(({ status, data }) => {
        if (status === 200) {
          setTodoList(data.todos);
        }
      });
  }, []);
  return (
    <div className="flex-col items-center ">
      <TodoForm todos={todoList} setTodos={setTodoList} />
      <TodoList todos={todoList} setTodos={setTodoList} />
    </div>
  );
};

export default Main;
