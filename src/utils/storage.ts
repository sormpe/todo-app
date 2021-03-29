const setToLocalStorage = (items: TodoType[]) => {
  localStorage.setItem("todoTasks", JSON.stringify(items));
};

const getFromLocalStorage = () => {
  const storageItems = localStorage.getItem("todoTasks");
  if (storageItems) {
    return JSON.parse(storageItems);
  }
  return;
};

export { setToLocalStorage, getFromLocalStorage };
