import "./App.css"

function Count(props) {
    return (
        <div className="counter--count">
            <h1>{props.number}</h1>
        </div>
    )
}


console.log("Count component rendered")

export default Count