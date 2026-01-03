import React from 'react'
import Navbar from "../Components/Navbar.jsx";
import Footer from '../Components/Footer.jsx';
import { useParams } from 'react-router-dom';
import "../Style/TaskDetails.css"

function TaskDetails({ tasks }) {
  const { id } = useParams();
  const task = tasks.find((item) => item.id.toString() === id)
  if(!task){
    <>
    <Navbar />
    <h1 className='notFoundTask'>No Task Found</h1>
    </>
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
      </div>
      <Footer />
  </>
)
}

export default TaskDetails