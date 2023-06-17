import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import Background from './Background';

function App() {
  const [tasks, setTasks] = useState([]);
  const [cursorX, setCursorX] = useState(null);
  const [cursorY, setCursorY] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorX(e.clientX);
      setCursorY(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <Background />
      <div className="container text-center mt-5">
        <h1 className="text-white">ToDoList App</h1>
        <div
          className="cursor-effect"
          style={{
            left: cursorX,
            top: cursorY,
          }}
        ></div>
        <TaskForm addTask={addTask} />
        <TaskList tasks={tasks} deleteTask={deleteTask} />
      </div>
      <style>
        {`
          body {
            background: linear-gradient(to bottom, #0f4c75, #3282b8, #bbe1fa);
            font-family: Arial, sans-serif;
            color: #ffffff;
          }

          .container {
            max-width: 400px;
          }

          input.form-control {
            color: #000000;
          }

          .cursor-effect {
            position: fixed;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: rgba(0, 0, 0, 0.3);
            z-index: 9999;
            pointer-events: none;
            transform: translate(-50%, -50%);
            transition: transform 200ms;
            mix-blend-mode: difference;
          }
        `}
      </style>
    </div>
  );
}

export default App;
