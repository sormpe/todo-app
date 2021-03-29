import React from "react";

import DoneItem from "./subitems/doneItem";
import NotDoneItem from "./subitems/notDoneItem";

import { setToLocalStorage } from "../../utils/storage";

const TodoItem: React.FC<TodoItemProps> = ({ task, tasks, setTasks }) => {
  const removeTask = () => {
    const copyOfTasks = [...tasks];
    copyOfTasks.splice(tasks.indexOf(task), 1);
    setTasks(copyOfTasks);
    setToLocalStorage(copyOfTasks);
  };

  const toggleDoneStatus = (idx: number) => {
    const copyOfTasks = [...tasks];
    copyOfTasks[idx].done = !copyOfTasks[idx].done;
    setTasks(copyOfTasks);
    setToLocalStorage(copyOfTasks);
  };

  return (
    <li title="list-todo-items">
      {task.done ? (
        <DoneItem
          task={task}
          idx={tasks.indexOf(task)}
          toggleDoneStatus={toggleDoneStatus}
          removeTask={removeTask}
        />
      ) : (
        <NotDoneItem
          task={task}
          idx={tasks.indexOf(task)}
          toggleDoneStatus={toggleDoneStatus}
          removeTask={removeTask}
        />
      )}
    </li>
  );
};

export default TodoItem;
