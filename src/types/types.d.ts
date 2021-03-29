type TodoType = {
  task: string;
  done: boolean;
};

type TodoItemProps = {
  task: TodoType;
  tasks: Array<TodoType>;
  setTasks: React.Dispatch<React.SetStateAction<TodoType[]>>;
};

type SubItemProps = {
  task: TodoType;
  idx: number;
  toggleDoneStatus: (idx: number) => void;
  removeTask: () => void;
};
