import React from "react";
import ToDoCard from "./ToDoCard";

const TodoList = (props) => {
  const { todos } = props;
  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => {
        return (
          <ToDoCard {...props} key={todoIndex} index={todoIndex}>
            <p>{todo}</p>
          </ToDoCard>
        );
      })}
    </ul>
  );
};

export default TodoList;
