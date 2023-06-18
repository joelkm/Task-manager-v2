import React, { useState } from 'react'
import dayjs from "dayjs";
import axios from 'axios';
import { useForm } from "react-hook-form";

import { useMutation, useQueryClient } from 'react-query';

// TO - DO: MAKE A MODULE
type FormValues = {
  title: String,
  description: String,
  date: Date,
  apiError: string
}
  

function Task(props: any) {

  const queryClient = useQueryClient()
  
  const { register, handleSubmit, setError, formState: { errors } } = useForm<FormValues>();
  
  const [editionMode, setEditionMode] = useState(false)

  async function editTask(data:any) {
    setEditionMode(true);    
  }

  async function stopTaskEdition(data:any) {
    setEditionMode(false);
  }

  const onSubmit = async (data: any) => {
    updateTaskMutation.mutate(data);
  };

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
    setEditionMode(false)
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
    deleteTaskMutation.mutate
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
          <button onClick={editTask}>
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button onClick={deleteTask}>
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
        {
        editionMode &&
        <form onSubmit={handleSubmit(onSubmit)}>
          <div><i className="fa-regular fa-xmark" onClick={stopTaskEdition}></i></div>
          <input type="title" placeholder="Title" defaultValue={props.taskInfo.title} {...register("title", {required: true})}/>
          {errors.title && <span className='error-message'>Please, introduce a title</span>}
          <input type="description" placeholder="Description" defaultValue={props.taskInfo.description} {...register("description", {required: true})}/>
          {errors.description && <span className='error-message'>Please, introduce a description</span>}
          <input type="date" defaultValue={props.taskInfo.date} {...register("date", {required: true})}/>
          {errors.date && <span className='error-message'>Please, introduce a date</span>}
          <input value="Update task" type="submit" className='submit'/>
          {errors.apiError && <span className="error-message">{errors.apiError.message}</span>}
        </form>
        }
    </div>
  )
}

export default Task