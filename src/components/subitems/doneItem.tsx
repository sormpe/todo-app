import React from "react";

const DoneItem: React.FC<SubItemProps> = ({
  task,
  toggleDoneStatus,
  removeTask,
}) => {
  return (
    <div className="done-item">
      <span className="icon" onClick={() => toggleDoneStatus(task.index)}>
        <i className="fa fa-check check-icon--done"></i>
      </span>
      <span className="done-item-text">{task.task}</span>
      <span
        className="icon"
        onClick={() => removeTask(task.index)}
        title="remove"
      >
        <i className="fa fa-trash"></i>
      </span>
    </div>
  );
};

export default DoneItem;
