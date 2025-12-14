import { useState } from "react";
import TaskLists from "../comps/TaskLists";

type task = {
  name: string;
};

function Dashboard() {
  const [newTask, setNewTask] = useState<string>("");
  const [tasks, setTasks] = useState<task[]>([
    { name: "Create App" },
    { name: "Update App" },
    { name: "Delete App" },
  ]);

  const handleSubmit = (): void => {
    setTasks((prev) => [...prev, { name: newTask }]);
    setNewTask("");
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ): void => {
    e.preventDefault();
    const value = e.target.value;
    if (!value.trim()) return;
    setNewTask(value);
  };

  const deleteTask = (index: number): void => {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks.splice(index, 1);
      return newTasks;
    });
  };

  const updatedTask = (index: number, updatedTask: string): void => {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks.splice(index, 1, { name: updatedTask });
      return newTasks;
    });
  };

  return (
    <>
      <h1>DashBoard Page</h1>
      <h2>Create a Task</h2>
      <input
        onChange={(evt) => handleChange(evt)}
        defaultValue={""}
        placeholder="Enter a new task"
      />
      <button onClick={handleSubmit}>Submit</button>
      <h2>Double Click on a Task to edit:</h2>
      <TaskLists taskProps={[tasks, setNewTask, deleteTask, updatedTask]} />
    </>
  );
}

export default Dashboard;
