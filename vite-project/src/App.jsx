import React from 'react'
import './App.css'

const App = () => {
  return (

    <div className='bg-cyan-600 min-h-screen'>
      <div className="navbar bg-black text-white text-3xl justify-center flex m-auto p-5 w-full">
        <h1>My ToDo List</h1>
      </div>
      <div className="body bg-cyan-600 p-3 flex flex-row justify-center align-center text-xl">
        
          <input type="text" placeholder='Type your Task'/>
        <div className="inputbox">
        </div>
      </div>
    </div>
  )
}

export default App
