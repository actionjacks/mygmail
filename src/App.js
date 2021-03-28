//cmponents
import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//styles
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Sidebar />
      </div>
    </Router>
  );
}

export default App;
