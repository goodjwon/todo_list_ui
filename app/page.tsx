"use client";

import Head from 'next/head'
import Image from 'next/image'

import { useState } from 'react'

export default function Home() {

  type Task = {
    id: number,
    name: string,
    completed: boolean
  }

  const [task, setTask] = useState<Task>({
    id: 0,
    name: '',
    completed: false
  })

  const [tasks, setTasks] = useState<Task[]>([])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Input Value:', event.target.value);
    console.log('Tasks:', tasks);
  
    const inputValue = event.target.value.trim();
    console.log('Trimmed Input Value:', inputValue);
  
    if (inputValue !== '') {
      setTask({ ...task, name: inputValue });
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && task.name.trim() !== '') {
      event.preventDefault();
      setTasks(prevTasks => [...prevTasks, task]);
      setTask(prevTask => ({
        id: prevTask.id + 1,
        name: '',
        completed: false
      }));
    }
  };
  

  const handleTaskClick = (id: number) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task))
  }

  return (
    <div className="container">
      <Head>
        <title>Todo List App in JavaScript | CodingNepal</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css" />
      </Head>

      <div className="wrapper">
        <div className="task-input">
          <Image src="bars-icon.svg" alt="icon" width={20} height={20} />
          <input type="text" placeholder="Add a new task" value={task.name} onChange={handleInputChange} onKeyUp={handleKeyDown} />
        </div>
        <div className="controls">
          <div className="filters">
            <span className="active" id="all">All</span>
            <span id="pending">Pending</span>
            <span id="completed">Completed</span>
          </div>
          <button className="clear-btn">Clear All</button>
        </div>
        <ul className="task-box">
          {tasks.map((task) => (
            <li key={task.id} onClick={() => handleTaskClick(task.id)}>
              <p className={task.completed ? 'checked' : ''}>{task.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
