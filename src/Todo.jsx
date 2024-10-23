import React from "react";
import "./Todo.css";

function Todo({text, onUpdateClick, onDeleteClick}) {
  return (
    <div className="todo">
      <p>{text}</p>
      <div className="actions">
        <button onClick={onUpdateClick}>Update</button>
        <button onClick={onDeleteClick}>Delete</button>
      </div>
    </div>
  );
}

export default Todo;
