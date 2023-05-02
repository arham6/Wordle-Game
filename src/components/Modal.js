import React from 'react'

export default function Modal({isCorrect,turn,solution}) {
  const reloadPage=()=>{
    window.location.reload()
  }  
  return (
    <div className="modal">
        {
            (isCorrect)?
            <div>
                <h1>YOU WIN</h1>
                <p className="solution">{solution}</p>
                <p>you found the solution in {(turn===1)?'1 guess':`${turn} guesses`}</p>
                <button className='newgame' onClick={reloadPage}>New Game</button>
            </div>
            :
            <div>
                <h1>YOU LOST</h1>
                <p className="solution">{solution}</p>
                <p>better luck next time !</p> 
                <button className='newgame' onClick={reloadPage}>New Game</button>
            </div>
        }
    </div>
  )
}
