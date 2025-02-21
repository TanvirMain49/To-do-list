import React from 'react'
import Todo from '../../Component/ToDoTask/Todo'
import InProcess from '../../Component/InProcessTask/InProcess'
import Done from '../../Component/Done/Done'

export default function Home() {
  return (
    <div className='flex items-start justify-center gap-10 mt-10'>
        {/* todo list cards */}
      <div className='shadow-md rounded-xl p-6 space-y-6 bg-red-500'>
        <h1 className='text-2xl font-bold text-center mb-4 text-white'>To Do Task</h1>
        <Todo />
        <Todo />
        <Todo />
      </div>

      {/* in process cards */}
      <div className='shadow-md space-y-6 rounded-xl p-6 bg-yellow-500'>
        <h1 className='text-2xl font-bold text-center mb-4 text-white'>In Process Task</h1>
        <InProcess />
        <InProcess />
        <InProcess />
      </div>

      {/* done task */}
      <div className='shadow-md space-y-6 rounded-xl p-6 bg-green-500'>
        <h1 className='text-2xl font-bold text-center mb-4 text-white'>Done Task</h1>
        <Done />
        <Done />
      </div>
    </div>
  )
}
