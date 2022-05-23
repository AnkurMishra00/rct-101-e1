import React from "react";
import Counter from "../Counter/Counter";
import styles from "./addTask.module.css";

const AddTask = () => {
  let [value,setvalue] = React.useState("")
  const [addtodo,setAddtodo] = React.useState(["jfjl","iuyiyi"])
  
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="cheked" value= {value}
      onChange = {(e) =>{
        setvalue(e.target.value)
      }} />
      <button data-cy="add-task-button" onClick={() =>{
        setAddtodo([...addtodo, {id: Date.now(), value: value},
        ]);
        setvalue("");
      }}
      >+</button>
      <Counter />
      
    </div>
  );
};

export default AddTask;
