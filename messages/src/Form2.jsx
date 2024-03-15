import './App.css'
import React from "react"

export default function Form2() {
    const [formData, setFormData] = React.useState(
        { 
          firstName: "", 
          lastName: "", 
          email: "", 
          comments: "", 
          isDivine: true,
          employment: "",
          favColor: ""
        } 
    )

    const id = React.useId()
    
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        console.log(formData)
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor={id}>first name</label>
            <input
                type="text"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
                id={id + "-firstName"}
            />
            <label htmlFor={id}>last name</label>
            <input
                type="text"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
                id={id + "-lastName"}
            />
            <label htmlFor={id}>email</label>
            <input
                type="text"
                onChange={handleChange}
                name="email"
                value={formData.email}
                id={id + "-email"}
            />
            <label htmlFor={id}>comments: ?</label>
            <textarea  
                type="text"
                onChange={handleChange}
                name="comments"
                value={formData.comments}
                id={id + "-comments"}
            />
            <div className="checkbox">
                <input 
                    type="checkbox" 
                    id={id + "-isDivine"}
                    onChange={handleChange}
                    checked={formData.isDivine}
                    name = "isDivine"
                />
                <label className="divine" htmlFor="isDivine"> are you divine or nah? </label>
            </div>
            <br />
            <br />

            <fieldset>
                <legend>Current employment status</legend>
                
                <input 
                    type="radio"
                    id={id + "-unemployed"}
                    name="employment"
                    value="unemployed"
                    onChange={handleChange}
                    checked={formData.employment === "unemployed"}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                
                <input 
                    type="radio"
                    id={id + "-part-time"}
                    name="employment"
                    value="part-time"
                    onChange={handleChange}
                    checked={formData.employment === "part-time"}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                
                <input 
                    type="radio"
                    id={id + "-full-time"}
                    name="employment"
                    value="full-time"
                    onChange={handleChange}
                    checked={formData.employment === "full-time"}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />         
            </fieldset>
            <br />
            
            <label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select 
                id={id + "-favColor"}
                value={formData.favColor}
                onChange={handleChange}
                name="favColor" 
            >
                <option value="select">Select</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
            <br />
            <br />

            <button type="submit">Submit</button>

        </form>
    )
}


/* 
1. In a vanilla JS app, at what point in the form submission
   process do you gather all the data from the filled-out form?
Right before the form is submitted.


2. In a React app, when do you gather all the data from
   the filled-out form?
As the form is being filled out. The data is all held in local state.


3. Which attribute in the form elements (value, name, onChange, etc.)
   should match the property name being held in state for that input?
`name` property.


4. What's different about saving the data from a checkbox element
   vs. other form elements?
A checkbox uses the `checked` property to determine what should
be saved in state. Other form elements use the `value` property instead. 


5. How do you watch for a form submit? How can you trigger
   a form submit?
onSubmit handler on the 'form' element
can trigger buy clicking on the form submit with button click or mouse click
*/