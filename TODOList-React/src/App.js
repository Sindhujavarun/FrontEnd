import React, { useState } from 'react';
import TodoForm from "./TodoForm";
import Todos from "./Todos";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, { text: todo }]);
  };

  const markComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const editTitle = (index, title) => {
    const newTodos = [...todos];
    newTodos[index].text = title;
    setTodos(newTodos);
  };

  return (
    <center>
      <div className="parent-container">
        <div className="container top-container">
          <div className="app">
            <div className="todoform">
              <TodoForm addTodo={addTodo} />
              <Todos todos={todos} markComplete={markComplete} editTitle={editTitle} />
            </div>
          </div>
        </div>
      </div>
    </center>
  );
}

export default App;
