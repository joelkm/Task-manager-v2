import React, { useState } from 'react'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Task from '../../components/Task';

type TaskType = {
  taskInfo: String
}

function Homepage() {
  const [tasks, setTasks] = useState<TaskType[]>([])

  axios.get("/tasks/:", {
    headers: {
      "Content-type": "application/json",
    },
  })
  .then((response) => {
    setTasks(response.data);
  })
  .catch((error) => {

  })
  return (
    <div>
      <h1>Your tasks</h1>
      <button onClick= {()=> {
          setTasks([
            {
              taskInfo: 'ayayayay'
            }
          ])
        }
      }></button>
      <div>
        {
          tasks.map((task) => (
            <Task taskInfo={task}/>
          ))
        } 
      </div>
    </div>
  )
}

export default Homepage
