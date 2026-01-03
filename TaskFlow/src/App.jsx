import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { useState } from 'react';
import  Home  from "./pages/Home.jsx";
import  AddTask  from "./pages/AddTask.jsx";
import  TaskDetails  from "./pages/TaskDetails.jsx";
import "./App.css"

function App() {
  const [tasks,setTasks] = useState([
    {
    id: 1,
    title: "Plan weekly tasks",
    date: "2025-01-01",
    deadline: "2025-01-02",
    priority: "High",
    status: "Pending",
    description: "Plan and organize tasks for the upcoming week to stay productive."
  },
  {
    id: 2,
    title: "Update task progress",
    date: "2025-01-01",
    deadline: "2025-01-03",
    priority: "Medium",
    status: "In Progress",
    description: "Review ongoing tasks and update their current progress status."
  },
  {
    id: 3,
    title: "Fix known issues",
    date: "2025-01-02",
    deadline: "2025-01-04",
    priority: "High",
    status: "Pending",
    description: "Identify and resolve bugs or issues discovered during testing."
  },
  {
    id: 4,
    title: "Design user interface",
    date: "2025-01-02",
    deadline: "2025-01-05",
    priority: "Medium",
    status: "In Progress",
    description: "Improve the layout and user experience of the application."
  },
  {
    id: 5,
    title: "Test application features",
    date: "2025-01-03",
    deadline: "2025-01-06",
    priority: "Low",
    status: "Pending",
    description: "Test core features to ensure everything works as expected."
  },
  {
    id: 6,
    title: "Optimize performance",
    date: "2025-01-04",
    deadline: "2025-01-07",
    priority: "Low",
    status: "Pending",
    description: "Enhance performance and responsiveness across the app."
  },
  {
    id: 7,
    title: "Complete documentation",
    date: "2025-01-05",
    deadline: "2025-01-08",
    priority: "Medium",
    status: "Completed",
    description: "Write clear and concise documentation for future reference."
  },
  {
    id: 8,
    title: "Review and finalize tasks",
    date: "2025-01-06",
    deadline: "2025-01-09",
    priority: "High",
    status: "Completed",
    description: "Review all tasks and ensure the workflow is properly completed."
  }
  ]);
  return (
    <BrowserRouter >
    <Routes>
      <Route path='/' element={<Home 
      tasks={tasks}
      />} />
      <Route path="/add" element={<AddTask 
      tasks={tasks}
      setTasks={setTasks}
      />} />
      <Route path='/task/:id' element={<TaskDetails 
      tasks={tasks}
      setTasks={setTasks}
      />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
