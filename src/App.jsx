import React, { useState } from "react";
import './App.css'
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState(([]));

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].isComplete = !newTodos[index].isComplete;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return(
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
    </div>
  );
};

export default App;