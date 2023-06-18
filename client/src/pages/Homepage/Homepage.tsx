import React, { useState } from 'react'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Task from '../../components/Task';

import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from 'react-query';

type FormValues = {
  title: String,
  description: String,
  date: Date,
  apiError: string
}

type TaskType = {
  taskInfo: String
}

function Homepage() {
  const { register, handleSubmit, setError, formState: { errors } } = useForm<FormValues>();
  const queryClient = useQueryClient()

  const {
    status,
    error,
    data: tasks,
  } = useQuery({
    queryKey: ['tasks'],
    queryFn: getTasks,
  })

  const createMutation = useMutation({
    mutationFn: createTask,
    onSuccess: (newTask:any)=> {
      queryClient.setQueryData(['tasks', newTask.id], newTask)
    }
  })

  async function createTask(data:any) {
    const task = await axios.post("/task", {
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
      setError('apiError', { type: 'server side', message: error.res.data.data.error }); // Someone has to fix this
    })    
    
    return task
  }

  async function getTasks(data:any) {
    return axios.get("/task", {
      headers: {
        "Content-type": "application/json",
      },
    })
    .then((res) => {      
      return res.data.data
  })
    .catch((error) => {
      console.log(error);
    })
  }
  
  async function logout() {
    return axios.delete("/user/logout", {
      headers: {
        "Content-type": "application/json",
      },
    })
    .then((res) => res.data)
    .catch((error) => {
      setError('apiError', { type: 'server side', message: error.res.data.data.error }); // Someone has to fix this
    })
  }

  const onSubmit = async (data: any) => {
    createMutation.mutate(data);
  };

  return (
    <div>
      <button onClick={() => logout()}><i className="fa-solid fa-right-from-bracket"></i></button>
      <h1>HOMEPAGE</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Create a task</h2>
        <input type="title" placeholder="Title" {...register("title", {required: true})}/>
        {errors.title && <span className='error-message'>Please, introduce a title</span>}
        <input type="description" placeholder="Description" {...register("description", {required: true})}/>
        {errors.description && <span className='error-message'>Please, introduce a description</span>}
        <input type="date" {...register("date", {required: true})}/>
        {errors.date && <span className='error-message'>Please, introduce a date</span>}
        <input value="Create task" type="submit" className='submit'/>
        {errors.apiError && <span className="error-message">{errors.apiError.message}</span>}
      </form>
      <h2>Your Tasks</h2>
      <div className='task-list'>
        {
         status == 'loading' && <h3>Refreshing...</h3> 
        }
        {
          tasks ? tasks.map((task:any) => (
            <Task taskInfo={task}></Task>
          )) : <h3>No tasks found</h3>
        } 
      </div>
    </div>
  )
}

export default Homepage
