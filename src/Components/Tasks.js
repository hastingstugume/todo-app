import React, { useState } from "react";
import Card from "./Helpers/Card";
import styles from "./Tasks.module.css";

const Tasks = (props) => {
  const [col, setCol] = useState("");
  const colorHandler = () => {
    setCol(1);
    console.log(col);
  };
  return (
    <Card>
      <div>
        <table className={styles.tasks}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {props.tasks.map((task) => (
              <tr key={Math.random().toString()}>
                <td className={task.status === 1 ? styles.complete : ""}>
                  {task.title}
                </td>
                <td>{task.desc}</td>
                <td>
                  <select onChange={colorHandler}>
                    <option selected={task.status === "New" ? "selected" : ""}>
                      New
                    </option>
                    <option
                      selected={task.status === "Inprogress" ? "selected" : ""}
                    >
                      Inprogress
                    </option>
                    <option
                      selected={task.status === "Complete" ? "selected" : ""}
                    >
                      Complete
                    </option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default Tasks;
