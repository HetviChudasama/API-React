import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css"; // Import the external CSS file

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => setTodos(response.data.slice(0, 20))) // Only first 20 for brevity
      .catch((err) => console.log("Error"));
  }, []);

  return (
    <>
      <h1 className="heading">✨ Todo List API Cards ✨</h1>
      <div className="card-container">
        {todos.map((todo) => (
          <div className="card bounce-in" key={todo.id}>
            <h6 className="title">{todo.title}</h6>
            <p className={`status ${todo.completed ? "done" : "pending"}`}>
              {todo.completed ? "✅ Completed" : "❌ Pending"}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
