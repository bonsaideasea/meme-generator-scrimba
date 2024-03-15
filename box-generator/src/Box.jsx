import './App.css'


function Box(props) {
    const styles = {
        backgroundColor: props.on ? "#222222" : "pink"
    }


    return (
        <button className="box" 
             style={styles}
             onClick={props.toggle}
        > 
        </button>
    )
}

export default Box