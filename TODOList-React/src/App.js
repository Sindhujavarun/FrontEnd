import React, { useState } from 'react';

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

  const TodoForm = ({ addTodo }) => {
    const [value, setvalue] = useState('');

    const handleChange = (e) => {
      setvalue(e.target.value);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!value)
        return;
      addTodo(value);
      setvalue('');
    };

    return (
      <center>
        <div className={"container"}>
          <div className="app-title text-center">TO-DO List</div>
          <form onSubmit={handleSubmit} className={"form-group row todo-form"}>
            <input className={"form-control col-md-8 "} type={"text"} placeholder={"Type Here..."} value={value} onChange={handleChange} />
            <input className={"form-control btn-primary col-md-4 submit-button"} type={"submit"} value={"Add"} />
          </form>
        </div>
      </center>
    )
  };

  const Todos = ({ todos, markComplete, editTitle }) => {
    return (
      <div className={"todo-list"}>
        {
          todos.map((todo, index) => (
            <Todo todo={todo} key={index} index={index} markComplete={markComplete} editTitle={editTitle} />
          ))
        }
      </div>
    );
  };

  const Todo = ({ todo, index, markComplete, editTitle }) => (
    <div className="todo">
      <p style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
        <input type={"checkbox"} onChange={() => markComplete(index)} name={"completed"} id={todo.id} />{' '}
        {todo.text}
      </p>
    </div>
  );

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