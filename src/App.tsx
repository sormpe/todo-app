import React from "react";
import "./App.css";
import "./App.sass";
import "font-awesome/css/font-awesome.min.css";

import TodoList from "./components/todoList";

const App: React.FC = () => {
  return (
    <div className="app">
      <TodoList />
    </div>
  );
};

export default App;
