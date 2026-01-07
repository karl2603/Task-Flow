import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Home from "./pages/Home.jsx";
import AddTask from "./pages/AddTask.jsx";
import TaskDetails from "./pages/TaskDetails.jsx";
import "./App.css"

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Revise Java",
      date: "2025-02-10",
      deadline: "2025-02-13",
      priority: "High",
      status: "In Progress",
      description: "Revise core Java topics including classes, objects, access modifiers, inheritance, and static members by solving small coding exercises."
    },
    {
      id: 2,
      title: "Fix edit and delete bugs",
      date: "2025-02-11",
      deadline: "2025-02-11",
      priority: "High",
      status: "Completed",
      description: "Debug issues related to editing and deleting tasks, including incorrect state updates and navigation after delete."
    },
    {
      id: 3,
      title: "Push project to GitHub",
      date: "2025-02-11",
      deadline: "2025-02-12",
      priority: "Medium",
      status: "Completed",
      description: "Clean up commits, write a proper README, and push the final version of the task tracker project to GitHub."
    },
    {
      id: 4,
      title: "Revise DBMS unit 3",
      date: "2025-02-12",
      deadline: "2025-02-14",
      priority: "High",
      status: "Pending",
      description: "Revise normalization, functional dependencies, and practice previous university exam questions for DBMS."
    },
    {
      id: 5,
      title: "Apply for frontend internship",
      date: "2025-02-13",
      deadline: "2025-02-15",
      priority: "High",
      status: "Pending",
      description: "Search for frontend or React internships, shortlist companies, and apply with an updated resume and portfolio."
    },
    {
      id: 6,
      title: "Apply for hackathons",
      date: "2025-02-14",
      deadline: "2025-02-17",
      priority: "Medium",
      status: "Pending",
      description: "Search for upcoming online and offline hackathons, shortlist relevant ones, and apply with updated project links and team details."
    },
    {
      id: 7,
      title: "Gym workout – Push day",
      date: "2025-02-14",
      deadline: "2025-02-14",
      priority: "Low",
      status: "Completed",
      description: "Chest, shoulders, and triceps workout focusing on progressive overload and proper form."
    },
    {
      id: 8,
      title: "Prepare mini-project documentation",
      date: "2025-02-15",
      deadline: "2025-02-18",
      priority: "Medium",
      status: "In Progress",
      description: "Write the problem statement, objectives, tech stack, and screenshots for the mini-project submission."
    },
    {
      id: 9,
      title: "Learn localStorage in React",
      date: "2025-02-16",
      deadline: "2025-02-17",
      priority: "Low",
      status: "Pending",
      description: "Understand how to persist React state using localStorage and integrate it into the task tracker application."
    },
    {
      id: 10,
      title: "Review resume and portfolio",
      date: "2025-02-17",
      deadline: "2025-02-18",
      priority: "Medium",
      status: "Pending",
      description: "Review resume content, update project descriptions, and ensure the portfolio looks clean and professional."
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
