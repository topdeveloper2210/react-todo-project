import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import About from "./pages/About"
import NotMatch from "./pages/NotMatch"

import TodoContainer from "./components/TodoContainer"
import Navbar from "./components/Navbar"

import "./App.css"

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Routes>
          <Route exact path="/" element={<TodoContainer />} />
          <Route path="/about/*" element={<About />} />
          <Route path="*" element={<NotMatch />} />
      </Routes>
    </Router>
  </React.StrictMode>, 
  document.getElementById("root")
)