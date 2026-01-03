import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import "../Style/Home.css";

function Home({ tasks }) {
  return (
    <div className="homePage">
      <Navbar />

      <div className="homeContainer">
        <div className="headerContainer">
          <h1 className="homeHeaderText">Stay organized. Stay in flow.</h1>
          <p className="homeSubHeaderText">
            Track, manage, and complete your tasks effortlessly.
          </p>
        </div>

        <div className="taskDisplayContainer">
          {tasks.length === 0 ? (
            <>
            <h2 className="noTaskText">No tasks added yet</h2>
            </>
          ) : (
            tasks.map((item) => (
              <Link key={item.id} to={`/task/${item.id}`}>
                <div className="taskContainer">
                  <h3 className="taskTitleDisplay">{item.title}</h3>
                  <p>Status: {item.status}</p>
                  <p>Priority: {item.priority}</p>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
