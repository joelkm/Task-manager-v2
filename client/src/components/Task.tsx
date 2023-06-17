import React from 'react'
import dayjs from "dayjs";
import axios from 'axios';

import { useMutation, useQueryClient } from 'react-query';

// TO - DO: MAKE A MODULE
type TaskType = {
    name: String
  }
  

function Task(props: any) {

  const queryClient = useQueryClient()

  async function updateTask(data:any) {
    const tasks = await axios.put(`/task/${props.taskInfo._id}`, {
      title: data.title,
      description: data.description,
      date: data.date,
    }, {
      headers: {
        "Content-type": "application/json",
      },
    })
    .then((res) => res.data)
    .catch((error) => {
    })    
    return tasks
  }

  async function deleteTask(data:any) {
    console.log(props.taskInfo._id);
    
    const tasks = await axios.delete(`/task/${props.taskInfo._id}`, {
      headers: {
        "Content-type": "application/json",
      },
    })
    .then((res) => res.data)
    .catch((error) => {
    })    
    return tasks
  }

  const deleteTaskMutation = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries("tasks");
    },
  });

  const updateTaskMutation = useMutation({
    mutationFn: updateTask,
    onSuccess: () => {
      queryClient.invalidateQueries("tasks");
    },
  });

  return (
    <div className='task' id={props.taskInfo._id}>
        <h3>{props.taskInfo.title}</h3>
        <div>
          <h4>Date: </h4>
          <p>{dayjs(props.taskInfo.date).format("DD/MM/YYYY")}</p>
        </div>
        <div>
          <h4>Description:</h4>
          <p>{props.taskInfo.description}</p>
        </div>
        <div className='action'>
          <button onClick={updateTask}>
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button onClick={deleteTask}>
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
    </div>
  )
}

export default Task