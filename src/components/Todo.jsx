import { useSelector } from "react-redux";
import AddFom from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";
import { markAsDone } from "../features/todo/todoSlice";
import { moveToTop } from "../features/todo/todoSlice";

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  const dispatch = useDispatch();
  const clickHandler = (id) => {
    console.log("delete", id);
    dispatch(deleteTodo(id));
  };
  const handleMarkDone = (id) => {
    console.log("mark done", id);
    dispatch(markAsDone(id));
    dispatch(moveToTop(id));
  };
  return (
    <>
      <AddFom />
      <h3>Todos</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task}
            <button onClick={() => clickHandler(todo.id)} className="btn">Delete</button>
            <button onClick={() => handleMarkDone(todo.id)} className="btn">Mark Done?</button>
          </li>
        ))}
      </ul>
    </>
  );
}
