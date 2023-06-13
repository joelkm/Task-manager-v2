import React from 'react'
import dayjs from "dayjs";

// TO - DO: MAKE A MODULE
type TaskType = {
    name: String
  }
  

function Task(props: any) {
  return (
    <div className='task'>
        <h3>{props.taskInfo.title}</h3>
        <p>{dayjs(props.taskInfo.date).format("DD/MM/YYYY")}</p>
        <p>{props.taskInfo.description}</p>
    </div>
  )
}

export default Task