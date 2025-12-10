import React, { useState } from "react";

const Todos = () => {
  const [initial, setInitial] = useState("");
  const [data, setData] = useState([]);

  const getInput = (event) => {
    setInitial(event.target.value);
  };

  const getData = () => {
    if (initial.trim() !== "") {
      setData([...data, initial]);
      setInitial("");
    }
  };

  const deleteTask = (index) => {
    const filterData = data.filter((_, id) => id !== index);
    setData(filterData);
  };

  return (
    <div className="container">
      <div className="inputTask">
        <input
          type="text"
          placeholder="Enter your task"
          value={initial}
          onChange={getInput}
        />
        <button onClick={getData}>Add</button>
      </div>

      {data.map((curVal, index) => (
        <div className="taskData" key={index}>
          <p>{curVal}</p>
          <i
            id="deleteIcon"
            onClick={() => deleteTask(index)}
            className="fa-solid fa-trash"
          ></i>
        </div>
      ))}
    </div>
  );
};

export default Todos;
