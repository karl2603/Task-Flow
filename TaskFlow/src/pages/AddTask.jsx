import React, { useState } from 'react'
import Navbar from "../Components/Navbar.jsx";
import "../Style/AddTask.css";
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer.jsx';

function AddTask({ tasks, setTasks }) {
  const navigate = useNavigate();
  const [task, setTask] = useState({
    id: Date.now(),
    title: "",
    date: "",
    deadline: "",
    priority: "",
    status: "",
    description: ""
  })
  function handleChange(e) {
    const { name, value } = e.target;
    setTask((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!task.title || !task.date || !task.deadline || !task.priority || !task.status || !task.description) {
      alert("Please fill all the fields!");
      return;
    }
    console.log(task)
    setTasks([...tasks, task]);
    setTask({
      id: Date.now(),
      title: "",
      date: "",
      deadline: "",
      priority: "",
      status: "",
      description: ""
    })
    navigate("/")
  }
  return (
    <>
      <div className='addTaskPage'>
        <Navbar />
        <div className='addTaskContainer'>
          <form className='addTaskForm' onSubmit={handleSubmit}>
            <h1 className='headerText'>Add New Task</h1>
            <p className='subHeaderText'>Create a new task and stay organized with Task Flow</p>
            <label className='title'>Task Title</label>
            <input className='titleInput' placeholder='Enter the task title...' name='title' value={task.title} onChange={handleChange}></input>
            <div className='dateContainer'>
              <label className='date'>Date</label>
              <input className='dateInput' placeholder='dd-mm-yyyy' name='date' value={task.date} onChange={handleChange}></input>
              <label className='date'>Due Date</label>
              <input className='dateInput' placeholder='dd-mm-yyyy' name='deadline' value={task.deadline} onChange={handleChange}></input>
            </div>
            <div className='priorityStatus'>
              <label className='priority'>Priority</label>
              <select name='priority' value={task.priority} onChange={handleChange}>
                <option value="" disabled>Select Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
              <label className='status'>Status</label>
              <select name='status' value={task.status} onChange={handleChange}>
                <option value="" disabled>Select Status</option>
                <option value="pending">Pending</option>
                <option value="inProgress">In Progess</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <label className='desc'>Task Description</label>
            <textarea className='descInput' placeholder='Add more details about your task...' name='description' value={task.description} onChange={handleChange}></textarea>
            <button className='addBtn' type='submit'>Add Task</button>
          </form>
        </div>
      </div>
      <Footer />
    </>

  )
}

export default AddTask