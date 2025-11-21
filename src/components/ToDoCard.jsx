import React from "react";

const ToDoCard = (props) => {
  const { children, handleDeleteToDo, handleDoneToDo, index, handleEditToDo } =
    props;
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <button
          onClick={() => {
            handleEditToDo(index);
          }}
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button
          onClick={() => {
            handleDeleteToDo(index);
          }}
        >
          <i className="fa-solid fa-trash"></i>
        </button>
        <button
          onClick={() => {
            handleDoneToDo(index);
          }}
        >
          <i className="fa-solid fa-check"></i>
        </button>
      </div>
    </li>
  );
};

export default ToDoCard;
