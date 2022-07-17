import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({ addNewTask }) => {
  const [task, setTask] = useState();

  // NOTE: do not delete `data-testid` key value pair

  return (
    <div className={`${styles.todoForm} ${styles.flex}`}>
      <input
        data-testid="add-task-input"
        type="text"
        className={styles.input}
        placeholder={"Add Task"}
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <button
        data-testid="add-task-button"
        onClick={() => {
          addNewTask(task);
        }}
      >
        <b>+</b>
      </button>
    </div>
  );
};

export default AddTask;