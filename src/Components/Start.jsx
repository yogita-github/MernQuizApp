import React from 'react'
import { useContext } from 'react'
import { QuizContext } from '../Context/QuizHolder'

export default function Start() {
  const {setStart} = useContext(QuizContext)
  return (
    <div className='w-full h-screen flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 '>
      
       
        <button onClick={() => setStart(true)} className='border border-orange-500 p-3 text-5xl rounded hover:bg-orange-400'>Start</button>
        
    </div>

  )
}
