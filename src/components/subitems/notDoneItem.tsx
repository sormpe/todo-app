import React from "react";

const NotDoneItem: React.FC<SubItemProps> = ({
  task,
  toggleDoneStatus,
  removeTask,
}) => {
  return (
    <div className="notdone-item">
      <span className="icon" onClick={() => toggleDoneStatus(task.index)}>
        <i className="fa fa-check check-icon--notdone"></i>
      </span>
      <span>{task.task}</span>
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

export default NotDoneItem;
