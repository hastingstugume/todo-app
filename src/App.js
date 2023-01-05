import AddTaskForm from "./Components/AddTaskForm";
import React, { useState } from "react";
import Tasks from "./Components/Tasks";
import Card from "./Components/Helpers/Card";
import styles from "./Components/AddTask.module.css";
const dummy = [
  {
    title: "Lecture",
    desc: "Attend BPM",
    id: Math.random().toString(),
    status: "New",
  },
  {
    title: "Football",
    desc: "Play turf",
    id: Math.random().toString(),
    status: "Inprogress",
  },
];
function App() {
  const [allTasks, setTasks] = useState(dummy);
  const [show, setShow] = useState(true);
  const addTaskHandler = () => {
    setShow(false);
  };
  const showTasksHandler = () => {
    setShow(true);
  };

  const taskHandler = (task) => {
    setTasks((prevTask) => {
      return [task, ...prevTask];
    });
    console.log(allTasks);
    setShow(true);
  };

  return (
    <div>
      <Card className={styles["add-task"]}>
        <h2>Tasks Monitor</h2>
        <button onClick={showTasksHandler}>Show Tasks</button>
        <button onClick={addTaskHandler}>Add New Task</button>
      </Card>
      {!show && <AddTaskForm onAddTask={taskHandler} />}
      {show && <Tasks tasks={allTasks} />}
    </div>
  );
}

export default App;
