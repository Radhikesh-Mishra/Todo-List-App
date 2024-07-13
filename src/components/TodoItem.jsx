import React from 'react';

function TodoItem({ todo, index, toggleComplete, deleteTodo }) {
  return (
    <div className={`todo-item ${todo.isComplete ? 'complete' : ''}`}>
      <span onClick={() => toggleComplete(index)}>{todo.text}</span>
      <button onClick={() => deleteTodo(index)}>Delete</button>
    </div>
  );
}

export default TodoItem;
