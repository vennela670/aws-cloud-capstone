import React, { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  // Fetch tasks
  const fetchTasks = async () => {
    const response = await fetch("http://3.108.223.64:5000/tasks");
    const data = await response.json();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Add task
  const addTask = async () => {
    if (!task.trim()) {
      alert("Task cannot be empty");
      return;
    }

    await fetch("http://3.108.223.64:5000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task }),
    });

    setTask("");
    fetchTasks();
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>AWS Cloud Task Manager</h1>

      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          marginRight: "10px",
        }}
      />

      <button
        onClick={addTask}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Add Task
      </button>

      <h2 style={{ marginTop: "30px" }}>Tasks</h2>

      <ul>
        {tasks.map((item) => (
          <li key={item.id}>{item.task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;