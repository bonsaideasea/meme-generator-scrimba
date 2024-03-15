import React from "react"
import "./App.css"

function Form() {
    const [firstName, setFirstName] = React.useState("")
    const[lastName, setLastName] = React.useState("")

     
    function handleFNChange(event) {
        setFirstName(event.target.value)
    }

    function handleLNChange(event) {
        setLastName(event.target.value)
    }
    
    console.log(firstName, lastName)

    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleFNChange}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleLNChange}
            />
        </form>
    )
}


export default Form