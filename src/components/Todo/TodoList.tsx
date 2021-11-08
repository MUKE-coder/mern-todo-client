import axios from "axios";

export interface Todo {
  _id: string;
  title: string;
  description: string;
  isCompleted: Boolean;
  isReminder: Boolean;
  isAchieved: Boolean;
}

interface TodoListProps {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
}

const TodoList = ({ todos, setTodos }: TodoListProps) => {
  const markCompleted = (todo: Todo) => {
    axios
      .put(
        `https://jb-mern-todo.herokuapp.com/todo/${todo._id}`,
        {},
        { headers: { token: localStorage.getItem("token") } }
      )
      .then((res) => {
        if (res.status === 200) {
          let _todos = todos;

          setTodos(_todos.filter((todo) => res.data.todo.id !== todo._id));
        }
      });
  };
  return (
    <div className="flex flex-wrap m-2">
      {todos
        .filter((todo) => !todo.isCompleted)
        .map((todo) => (
          <div
            className="max-w-sm min-w-0 p-4 m-2 text-green-700 bg-green-100 border-l-4 border-green-500 w-60"
            role="alert"
            key={todo._id}
          >
            <p className="font-bold">{todo.title}</p>
            <p>{todo.description}</p>
            <div className="flex justify-between">
              <button
                onClick={() => markCompleted(todo)}
                className="px-2 py-2 mt-3 font-semibold text-gray-800 bg-transparent border border-none rounded-full shadow hover:bg-gray-100 group focus:outline-none focus:border-none"
              >
                <svg
                  className="w-6 h-6 text-blue-900"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <button className="px-2 py-2 mt-3 font-semibold text-gray-800 bg-transparent border border-none rounded-full shadow hover:bg-gray-100 group focus:outline-none focus:border-none">
                <svg
                  className="w-6 h-6 text-blue-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  ></path>
                </svg>
              </button>
              <button className="px-2 py-2 mt-3 font-semibold text-gray-800 bg-transparent border border-none rounded-full shadow hover:bg-gray-100 group focus:outline-none focus:border-none">
                <svg
                  className="w-6 h-6 text-blue-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  ></path>
                </svg>
              </button>
              <button className="px-2 py-2 mt-3 font-semibold text-gray-800 bg-transparent border border-none rounded-full shadow hover:bg-gray-100 group focus:outline-none focus:border-none">
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TodoList;
