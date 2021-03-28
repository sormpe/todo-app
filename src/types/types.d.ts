type TodoType = {
  task: string;
  index: number;
  done: boolean;
};

type TodoItemProps = {
  task: TodoType;
  tasks: Array<TodoType>;
  setTasks: React.Dispatch<React.SetStateAction<TodoType[]>>;
};

type SubItemProps = {
  task: TodoType;
  toggleDoneStatus: (idx: number) => void;
  removeTask: (idx: number) => void;
};
