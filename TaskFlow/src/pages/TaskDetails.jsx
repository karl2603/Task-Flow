import React from 'react'
import { useState } from 'react';
import Navbar from "../Components/Navbar.jsx";
import Footer from '../Components/Footer.jsx';
import { useParams } from 'react-router-dom';
import "../Style/TaskDetails.css"

function TaskDetails({ tasks, setTasks }) {
  const { id } = useParams();
  const task = tasks.find((item) => item.id.toString() === id)
  const [showPopUp, setShowPopUp] = useState(false)
  const [editedTask, setEditedTask] = useState(task)

  function handleEdit(e) {
    const { name, value } = e.target;
    setEditedTask((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  function handleSave(){
    const updatedTasks = tasks.map((item)=>(item.id === editedTask.id ? editedTask : item))
    setTasks(updatedTasks)
    setShowPopUp(false)
  }
  if (!task) {
    return (
      <>
        <Navbar />
        <h1 className='notFoundTask'>No Task Found</h1>
        <Footer />
      </>
    )
  }
  return (
    <>
      <Navbar />
      <div className='taskDetailHeader'>
        <h1 className='taskDetailHeaderText'>Task Details</h1>
      </div>
      <div className="taskDetail">
        <h1 className='taskDetailTitle'>{task.title}</h1>
        <p className='taskDetailDate'>{task.date}</p>
        <p className='taskDetailDeadline'>{task.deadline}</p>
        <p className='taskDetailPriority'>{task.priority}</p>
        <p className='taskDetailStatus'>{task.status}</p>
        <p className='taskDetailDesc'>{task.description}</p>
        <button className='editBtn' onClick={() => { setShowPopUp(true) }}>Edit</button>
        <button className='completedBtn'>Completed</button>
      </div>
      <Footer />
      {
        showPopUp && (
          <div className='editOverLay'>
            <div className='editPopUp'>
              <h2 className='editTaskText'>Edit Task</h2>
              <label className='editTitle'>Title</label>
              <input className='editTaskTitleInput'
                name="title"
                value={editedTask.title}
                onChange={handleEdit}
                placeholder='Enter Title'
              />
              <label className='editDate'>Date</label>
              <input className='editTaskDateInput'
                name="date"
                value={editedTask.date}
                onChange={handleEdit}
                placeholder='dd-mm-yyyy'
              />
              <label className='editDueDate'>Due Date</label>
              <input className='editTaskDueDateInput'
                name="deadline"
                value={editedTask.deadline}
                onChange={handleEdit}
                placeholder='dd-mm-yyyy'
              />
              <label className='editPriority'>Priority</label>
              <select name="priority" value={editedTask.priority} onChange={handleEdit}>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
              <label className='editStatus'>Status</label>
              <select name='status' value={editedTask.status} onChange={handleEdit}>
                <option value="" disabled>Select Status</option>
                <option value="pending">Pending</option>
                <option value="inProgress">In Progess</option>
                <option value="completed">Completed</option>
              </select>
              <label className='editDesc'>Task Description</label>
              <textarea
                name="description"
                value={editedTask.description}
                onChange={handleEdit}
              />
              <div className='editBtnDiv'>
                <button className='saveBtn'onClick={handleSave}>Save</button>
                <button className='cancelBtn' onClick={() => { setShowPopUp(false) }}>Cancel</button>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}

export default TaskDetails