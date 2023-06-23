"use client";

import Head from 'next/head'
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
    if (event.key === 'Enter') {
      setTasks([...tasks, task])
      setTask({ id: task.id + 1, name: '', completed: false })
    } else {
      setTask({ ...task, name: event.target.value })
    }
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
          <img src="bars-icon.svg" alt="icon" />
          <input type="text" placeholder="Add a new task" value={task.name} onChange={handleInputChange} onKeyDown={handleInputChange} />
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
            <li key={task.id}>{task.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
