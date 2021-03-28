import React from "react";

import DoneItem from "./subitems/doneItem";
import NotDoneItem from "./subitems/notDoneItem";

const TodoItem: React.FC<TodoItemProps> = ({ task, tasks, setTasks }) => {
  const removeTask = (idx: number) => {
    const filtered = tasks.filter((t) => t.index !== idx);
    setTasks(filtered);
    localStorage.setItem("todoTasks", JSON.stringify(filtered));
  };

  const toggleDoneStatus = (idx: number) => {
    setTasks(
      tasks.map((t) =>
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
      )
    );
    localStorage.setItem(
      "todoTasks",
      JSON.stringify(
        tasks.map((t) =>
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
        )
      )
    );
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
