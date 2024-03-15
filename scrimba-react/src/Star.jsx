import './App.css'

function Star(props){
    let starIcon = props.isFilled ? "fillstar.png" : "emptystar.png"
    const buttonLabel = props.isFilled ? "unmark as favorite" : "mark as favorite"

    return (
        <button 
            onClick = {props.handleClick}
            aria-label = {buttonLabel}
            aria-pressed = {props.isFilled}
            className="card--favorite-button"
        >
            <img 
                src = {starIcon}
                alt = "star-icon"
                className="card--favorite"      
            />
        </button>
    )
}

export default Star