import './App.css'
import Form2 from "./Form2.jsx"


function App() {
    return (
        <Form2 />
    )
}
export default App



/* function App() {
    const [messages, setMessages] = React.useState(["a", 'b', 'c'])

    return (
        <div>
            {
                messages.length === 0 ?
                <h1>You`&apos`re all caught up!</h1> :
                <h1>You have {messages.length} unread  
                    {messages.length > 1 ? " messages" : " message"}  
                </h1>
            }
        </div>
    )
} */