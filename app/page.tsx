"use client";

import Head from 'next/head'
import Image from 'next/image'

import { useState } from 'react'

export default function Home() {

 
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
          <input type="text" placeholder="Add a new task" value=""/>
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
          <li><p>1111</p></li>
        </ul>
      </div>
    </div>
  )
}
