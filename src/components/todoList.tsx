import React, { useEffect, useState } from "react";

import TodoItem from "./todoItem";

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<Array<TodoType>>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [errorText, setErrorText] = useState<string>("");

  const addNewTask = () => {
    if (inputValue) {
      const finalTasks = [
        ...tasks,
        ...[{ task: inputValue, index: tasks.length, done: false }],
      ];
      setTasks(finalTasks);
      localStorage.setItem("todoTasks", JSON.stringify(finalTasks));
      setInputValue("");
    } else {
      setErrorText("Please give a task!");

      const timer = setTimeout(() => {
        setErrorText("");
      }, 2000);
      return () => clearTimeout(timer);
    }
  };

  useEffect(() => {
    const storageItems = localStorage.getItem("todoTasks");
    if (storageItems) {
      // ensure correct indices
      JSON.parse(storageItems).map(
        (s: TodoType, idx: number) => (s.index = idx)
      );
      setTasks(JSON.parse(storageItems));
    }
  }, []);

  const onKeyDown = (e: { key: string } | undefined) => {
    if (e?.key === "Enter") {
      addNewTask();
    }
  };

  return (
    <div id="todo-list">
      {errorText ? (
        <article className="message is-warning">
          <div className="message-body">{errorText}</div>
        </article>
      ) : null}

      <div className="field">
        <div className="todo-list-control-container">
          <div className="control">
            <input
              className="input"
              type="text"
              value={inputValue}
              placeholder="New task.."
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => onKeyDown(e)}
            />
          </div>

          <span className="icon circle-icon" onClick={addNewTask}>
            <i className="fa fa-plus-circle"></i>
          </span>
        </div>
      </div>
      <hr />
      <ul>
        {tasks.map((task, idx) => {
          return (
            <TodoItem key={idx} task={task} tasks={tasks} setTasks={setTasks} />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
