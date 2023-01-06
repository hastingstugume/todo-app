import styles from "./AddTaskForm.module.css";
import Button from "./Helpers/Button";
import Card from "./Helpers/Card";
import React, { useState } from "react";

const AddTaskForm = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [status, setStatus] = useState("");
  const titleHandler = (event) => {
    setTitle(event.target.value);
  };
  const descHandler = (event) => {
    setDesc(event.target.value);
  };

  const statusHandler = (event) => {
    setStatus(event.target.value);
  };

  const formSubmitHandler = (event) => {
    if (title.length < 0 || desc.length < 0) {
      console.log("hey");
      return;
    }
    event.preventDefault();
    const task = {
      title: title,
      desc: desc,
      status: status,
      id: Math.random().toString(),
    };
    props.onAddTask(task);
    setDesc("");
    setTitle("");
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={formSubmitHandler}>
        <label>Task Name </label>
        <input type="text" onChange={titleHandler} />
        <label>Description</label>
        <textarea rows="4" cols="70" onChange={descHandler}></textarea>
        <div>
          <label>Status </label>
          <select onChange={statusHandler}>
            <option value="New">New</option>
            <option value="Inprogress">Inprogress</option>
            <option value="Complete">Complete</option>
          </select>
        </div>
        {title.length > 0 && desc.length > 0 && <Button>Add Task</Button>}
      </form>
    </Card>
  );
};

export default AddTaskForm;
