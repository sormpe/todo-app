import React from "react";

import DoneItem from "./subitems/doneItem";
import NotDoneItem from "./subitems/notDoneItem";

import { setToLocalStorage } from "../utils/storage";

const TodoItem: React.FC<TodoItemProps> = ({ task, tasks, setTasks }) => {
  const removeTask = (idx: number) => {
    const filtered = tasks.filter((t) => t.index !== idx);
    setTasks(filtered);
    setToLocalStorage(filtered);
  };

  const toggleDoneStatus = (idx: number) => {
    const mappedTodos = tasks.map((t) =>
      t.index === idx
        ? {
            task: t.task,
            index: t.index,
            done: !t.done,
          }
        : {
            task: t.task,
            index: t.index,
            done: t.done,
          }
    );
    setTasks(mappedTodos);
    setToLocalStorage(mappedTodos);
  };

  return (
    <li title="list-todo-items">
      {task.done ? (
        <DoneItem
          task={task}
          toggleDoneStatus={toggleDoneStatus}
          removeTask={removeTask}
        />
      ) : (
        <NotDoneItem
          task={task}
          toggleDoneStatus={toggleDoneStatus}
          removeTask={removeTask}
        />
      )}
    </li>
  );
};

export default TodoItem;
