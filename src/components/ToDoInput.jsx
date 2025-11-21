import React, { useState, useRef } from "react";

const ToDoInput = (props) => {
  const { handleUpdateToDos, todoValue, setTodoValue } = props;

  const inputRef = useRef(null);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (todoValue.trim().length !== 0) handleEmptyInput(todoValue);
    }
  };

  function handleEmptyInput(todoValue) {
    handleUpdateToDos(todoValue);
    setTodoValue("");
    inputRef.current.focus();
  }

  return (
    <header>
      <input
        ref={inputRef}
        //onBlur={(e) => e.target.focus()}
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        onKeyDown={handleKeyPress}
        placeholder="Enter your task..."
      />
      <button
        onClick={() => {
          {
            if (todoValue.trim().length !== 0)
              return handleEmptyInput(todoValue);

            //handleUpdateToDos(todoValue);
            //setTodoValue("");
          }
          //alert("Please add a task.");
          //
        }}
      >
        Add task
      </button>
    </header>
  );
};

export default ToDoInput;
