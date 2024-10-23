import { useEffect, useState } from "react";
import "./App.css";
import Todo from "./Todo";
import { addToDo, deleteToDo, getAllToDo, updateToDo } from "./HandleApi";

function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  const handleSubmit = () => {
    if (isUpdating) {
      updateToDo(toDoId, text, setToDo, setText, setIsUpdating);
    } else {
      addToDo(text, setText, setToDo);
    }
  };

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  };

  return (
    <>
      <h1>Todo App</h1>
      <div className="container">
        <input
          type="text"
          placeholder="Add your tasks..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button onClick={handleSubmit}>{isUpdating ? "Update" : "Add"}</button>
      </div>

      <div className="list">
        {toDo.map((item) => (
          <Todo
            key={item._id}
            text={item.text}
            onUpdateClick={() => updateMode(item._id, item.text)}
            onDeleteClick={() => deleteToDo(item._id, setToDo)}
          />
        ))}
      </div>
    </>
  );
}

export default App;
