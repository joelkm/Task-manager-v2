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
        <div>
          <h4>Date: </h4>
          <p>{dayjs(props.taskInfo.date).format("DD/MM/YYYY")}</p>
        </div>
        <div>
          <h4>Description:</h4>
          <p>{props.taskInfo.description}</p>
        </div>
        <div className='action'>
          <button>
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button>
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
    </div>
  )
}

export default Task