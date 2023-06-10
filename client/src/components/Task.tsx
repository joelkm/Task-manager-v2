import React from 'react'

// TO - DO: MAKE A MODULE
type TaskType = {
    name: String
  }
  

function Task(props: any) {
  return (
    <div>
        <h1>{props.taskInfo}</h1>
    </div>
  )
}

export default Task