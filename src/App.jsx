import { useState, useEffect } from "react";
import ToDoInput from "./components/ToDoInput";
import TodoList from "./components/TodoList";

function App() {
  //let todos = ["Make some code", "Play basketball", "Eat healthy"];

  const [todos, setTodos] = useState([
    //"Make some code",
    //"Play basketball",
    //"Eat healthy",
  ]);

  function persistData(newList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }

  const [todoValue, setTodoValue] = useState("");

  function handleUpdateToDos(newTodo) {
    const newToDoList = [...todos, newTodo];
    persistData(newToDoList);
    setTodos(newToDoList);
  }

  function handleDeleteToDo(index) {
    const newToDoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    persistData(newToDoList);
    setTodos(newToDoList);
  }

  function handleDoneToDo(index) {
    const newToDoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    persistData(newToDoList);
    setTodos(newToDoList);
  }

  function handleEditToDo(index) {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    handleDeleteToDo(index);
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }

    let localTodos = localStorage.getItem("todos");
    if (!localTodos) {
      return;
    }

    console.log(localTodos);
    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);

  return (
    <>
      <>
        <h1 className="title">My List</h1>
        <ToDoInput
          todoValue={todoValue}
          setTodoValue={setTodoValue}
          handleUpdateToDos={handleUpdateToDos}
          handleEditToDo={handleEditToDo}
          handleDoneToDo={handleDoneToDo}
        />
        {todos.length === 0 ? (
          <div className="emptyMessage">
            There are no tasks right now. Add one!
          </div>
        ) : (
          <TodoList
            handleDeleteToDo={handleDeleteToDo}
            handleEditToDo={handleEditToDo}
            handleDoneToDo={handleDoneToDo}
            todos={todos}
          />
        )}
      </>
    </>
  );
}

export default App;
