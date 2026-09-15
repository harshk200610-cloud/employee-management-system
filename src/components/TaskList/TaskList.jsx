import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ darkMode, data }) => {
  console.log(data)
  return (
    <div
      className={`mt-5 flex min-h-0 w-full min-w-0 flex-1 gap-4 overflow-x-auto rounded-3xl p-4 scrollbar-hide transition-colors duration-300 sm:p-5 ${
        darkMode ? 'bg-[#292722]' : 'bg-[#ded8cf]'
      }`}
    >


      {data.tasks.map((elem)=>{
        if(elem.active){
          return <AcceptTask />
        }
        if(elem.newTask){
          return <NewTask />
        }
        if(elem.completed){
          return <CompleteTask />
        }
        if(elem.failed){
          return <FailedTask />
        }
      })}

  
      

    </div>
  )
}

export default TaskList