import React, { useContext } from 'react'
import { QuizContext } from '../Context/QuizHolder'

export default function Result() {
    const { correct, setExit, setStart, quizzes } = useContext(QuizContext)
    const playAgain = () => {
        setExit(false);
        setStart(false);
    }
    return (
        <div className='w-full h-screen flex justify-center items-center bg-red-300'>
            <div className='w-[40%] border shadow-lg rounded-md overflow-hidden text-center bg-red-500'>
                <h2 className='text-2xl p-3 my-2'>{correct} are correct out of {quizzes.length}</h2>
                <button onClick={playAgain} className='border border-orange-500 hover:bg-orange-400 p-3 text-2xl rounded mb-2'>Play again</button>
            </div>
        </div>
    )
}