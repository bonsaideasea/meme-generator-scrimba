import './App.css'
import Boxes from './Boxes.js'
import Box from './Box.jsx'
import React from 'react'

function App() {
    const [squares, setSquares] = React.useState(Boxes)

    function toggle(id) {
        setSquares(prevSquare => {
            return prevSquare.map((square) => {
                return square.id === id ? {...square, on : !square.on} : square
            })
        }) 
    } 


    const squareElements = squares.map(square => (
        <Box 
            key = {square.id}
            on = {square.on}
            toggle = {() => toggle(square.id)}
        />
    ))


  return (
    <main>
      {squareElements}
    </main>
  )
}

export default App
