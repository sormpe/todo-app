import React from "react";
import "./App.css";
import "./App.sass";
import "font-awesome/css/font-awesome.min.css";

import TodoList from "./components/todoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoList />
      </header>
    </div>
  );
}

export default App;
