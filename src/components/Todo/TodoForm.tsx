import axios from "axios";
import { useRef, useState } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { Todo } from "./TodoList";

interface TodoFormProps {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
}
const TodoForm = ({ todos, setTodos }: TodoFormProps) => {
  const [showForm, setShowForm] = useState(false);
  const [showPtag, setShowPtag] = useState(true);

  const formRef = useRef<HTMLFormElement>(null);

  const handleFormClick = () => {
    setShowPtag(false);
    setShowForm(true);
  };
  const clickOutsidehandler = () => {
    setShowForm(false);
    setShowPtag(true);
  };

  useOnClickOutside(formRef, clickOutsidehandler);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [success, setSuccess] = useState({ state: false, msg: "" });
  const onSubmit = () => {
    if (title.length > 0) {
      axios
        .post(
          "https://jb-mern-todo.herokuapp.com/todos",
          { title: title, description: description },
          { headers: { token: localStorage.getItem("token") } }
        )
        .then((res) => {
          if (res.status === 200) {
            let todo = res.data.todo;
            setTodos([...todos, todo]);

            setTitle("");
            setDescription("");
            setSuccess({ state: true, msg: "Note Created Successfully" });
            setTimeout(() => {
              setSuccess({ state: false, msg: "" });
            }, 2000);
          }
        });
    }
  };
  return (
    <>
      <form
        ref={formRef}
        className="flex-col w-1/2 p-8 mx-auto rounded-md "
        style={{
          boxShadow:
            " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
        }}
        onClick={handleFormClick}
      >
        {showPtag && <p>Type Your Note here ..................</p>}
        <input
          type="text"
          className={`${
            showForm ? "" : "hidden"
          } w-full px-4 py-2 font-bold text-gray-500 bg-gray-100 border-none font-zen focus:outline-none`}
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className={`${
            showForm ? "" : "hidden"
          } w-full px-4 py-2 font-bold text-gray-500 bg-gray-100 border-none font-zen focus:outline-none`}
          placeholder="Description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="flex items-center justify-end">
          <button
            className={`${
              showForm ? "" : "hidden"
            } px-4 py-2 mt-6 font-semibold text-gray-800 bg-white border border-gray-400 rounded shadow hover:bg-gray-100 group`}
            onClick={() => onSubmit()}
          >
            <svg
              className="w-6 h-6 text-green-400 group-hover:text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </form>
      {success.state && (
        <div
          className="flex items-center w-64 px-4 py-3 text-sm font-bold text-green-700 bg-green-100"
          role="alert"
        >
          <svg
            className="w-6 h-6 text-green-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
            ></path>
          </svg>
          <p>{success.msg}</p>
        </div>
      )}
    </>
  );
};

export default TodoForm;
