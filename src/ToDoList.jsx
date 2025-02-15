import { useState } from "react";

const ToDoList = () => {

  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')

  function handleInputChange(event){
    setNewTask(event.target.value)
  }

  function addTask(){

    if ( newTask.trim() === '' ) return
    setTasks(c => [...c, newTask])
    setNewTask('')

  }

  function deleteTask(index){
    setTasks(c => c.filter((_, i) => i !== index ))
  }

  function moveTaskUp(index){

    if (index > 0){
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = 
      [updatedTasks[index -1], updatedTasks[index]];
      setTasks(updatedTasks);
    }

  }

  function moveTaskDown(index){

    if (index < tasks.length - 1 ){
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = 
      [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }

  }


  return (
    <div className="to-do-list">
        <h1> To do-List </h1>

        <ul>
            { tasks.map((item, index) => (
                <li key={index}> {item} 
                        <button className="toDoListButtons" onClick={() => deleteTask(index)}> delete </button>
                        <button className="toDoListButtons" onClick={() => moveTaskUp(index)}> ⬆️ </button>
                        <button className="toDoListButtons" onClick={() => moveTaskDown(index)}> ⬇️ </button>
                </li>
                
            ))}
        </ul>

        <div>
            <input type="text" 
            placeholder="Enter a task ..."
            value={newTask}
            onChange={handleInputChange}
            />
            <button
            onClick={addTask}
            >Add</button>
        </div>
        
    </div>
  )
}

export default ToDoList
