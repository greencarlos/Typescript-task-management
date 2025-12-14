import { useState } from "react";

type task = {
  name: string;
};

function TaskLists({ taskProps }) {
  const [tasks, setNewTask, deleteTask, updatedTask] = taskProps;
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleKeyDown = (index: number, event: HTMLInputElement) => {
    if (event.key === "Enter" || event.key === "Escape") {
      setIsEditing(false);
      updatedTask(index, event.target.value);
    }
  };

  return (
    <ul>
      {tasks.map((task: task, i: number) => {
        return isEditing ? (
          <>
            <input
              key={i * 10}
              type="text"
              onChange={(e) => setNewTask(e.target.value)}
              placeholder={task.name}
              onKeyDown={(e) => handleKeyDown(i, e)}
              onBlur={() => setIsEditing(false)}
            />
            <br />
          </>
        ) : (
          <li key={i * 10} onDoubleClick={handleDoubleClick}>
            {task.name + " "}
            <button onClick={() => deleteTask(i)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
}

export default TaskLists;
