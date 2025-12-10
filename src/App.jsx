import React, { useState } from "react";
import "./App.css";
import Todos from "./Components/Todo/Todos.jsx";


function App() {
  return (
    <div className="App">
      <h1>My Todo App</h1>
      <Todos />
    </div>
  );
}

export default App;
