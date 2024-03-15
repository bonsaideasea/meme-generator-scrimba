import './App.css'
import React from "react"
import WindowTrack from "./WindowTrack.jsx"

function App() {

  const [show, setShow] = React.useState()

  function toggle() {
    setShow(prevShow => !prevShow)
  }

  return (
    <div className="container">
        <button onClick={toggle}>
            Toggle WindowTracker
        </button>
        {show && <WindowTrack />}
    </div>
  )
}

export default App
