import './App.css'
import React from "react"
//import Count from "./Count.jsx"
//import Star from "./Star.jsx"



/* export default function App() {
    const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"]);

    function addItem() {
        setThingsArray(prevState => {
            return [...prevState, `Thing ${prevState.length + 1}`]
        })
    }

    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)  

    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )
} */



/* export default function App() {
    const [count, setCount] = React.useState(0);

    function plusOne() {
        setCount(prevCount => prevCount + 1)
    }

    function minusOne() {
        setCount(prevCount => prevCount - 1)
    }

    console.log("App component rendered")

    return (
        <div className="counter">
            <button className="counter--minus" onClick={minusOne}>–</button>
            <Count number={count} />
            <button className="counter--plus" onClick={plusOne}>+</button>
        </div>
    )
}
*/

/* 
export default function App(){
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })

    //let starIcon = contact.isFavorite ? "fillstar.png" : "emptystar.png"

    function toggleFavorite() {
        setContact(prevContact => ({
                ...prevContact,
                isFavorite: !prevContact.isFavorite
        }))
    }
    
    return (
        <main>
            <article className="card">
                <img src="user.png" className="card--image" />
                <div className="card--info">
                    <Star isFilled={contact.isFavorite} handleClick={toggleFavorite}/>
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>           
            </article>
        </main>
    )
}

 */


/* export default function App() {
    const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"]);

    function addItem() {
        setThingsArray(prevState => {
            return [...prevState, `Thing ${prevState.length + 1}`]
        })
    }

    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)  

    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )
} */



/* export default function App() {

    const [initialAnswer, setAnswer] = React.useState(true);
    // let answer = isGoingOut === true ? "Yes" : "No"    a ternary way to lessen the code
    
    function yesOrNo() {
        setAnswer(prevState => !prevState)
    }


    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <button className="state--value" onClick={yesOrNo} >
                <h1>{initialAnswer ? "Yes" : "No"}</h1>
            </button>
        </div>
    )
}
 */



/* export default function App() {

    const [currentNum, newNum] = React.useState(0)

    function plusOne() {
        newNum(prevNum => prevNum + 1);
        console.log("add")
    }

    function minusOne(){
        newNum(prevNum => prevNum - 1);
        console.log("subract");
    }

    return (
        <div className="counter">
            <button className="counter--minus" onClick={minusOne}>–</button>
            <div className="counter--count">
                <h1>{currentNum}</h1>
            </div>
            <button className="counter--plus" onClick={plusOne}>+</button>
        </div>
    )
}
 */



/* export default function App() {
    const [isImportant, setIsImportant] = React.useState("hella")
    
    function handleClick() {
        setIsImportant("no")
    }



    return (
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div className="state--value" onClick={handleClick}>
                <h1>{isImportant}</h1>
            </div>
        </div>
    )
}
*/
