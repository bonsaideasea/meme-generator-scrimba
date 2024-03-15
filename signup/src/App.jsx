import './App.css'
import React from "react"

function App() {

  const [formData, setFormData] = React.useState(
    {
      email: "",
      password: "",
      confirmPassword: "",
      yesOrNo: false
    }
  )
  console.log(formData)

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

  function handleSubmit(event) {
      event.preventDefault()
      if(formData.password === formData.confirmPassword) {
          console.log("signed up successfully")
      } else {
          console.log("passwords don't match")
          return
      }

      if(formData.yesOrNo) {
        console.log("Thanks for signing up for our newsletter!")
    }
  }

  return (
    <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor={id}>email address</label>
            <input 
              type="email"
              name="email"
              value={formData.email}
              className="form-input"
              id={id + '-email'}
              onChange={handleChange}
            />
            <label htmlFor={id}>password</label>
            <input 
              type="password"
              name="password"
              value={formData.password}
              className="form-input"
              id={id + '-password'}
              onChange={handleChange}
            />
            <label htmlFor={id}>confirm password</label>
            <input 
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              className="form-input"
              id={id + '-confirmPassword'}
              onChange={handleChange}
            />
            <div className="form-marketing">
                <input
                  type="checkbox"
                  name="yesOrNo"
                  checked={formData.yesOrNo}
                  id= {id + "-okayToEmail"}
                  onChange={handleChange}
                />
                <label htmlFor={id}>i&apos;ll subscribe to the newsletter</label>
            </div>
          <button className="form-submit">Sign Up</button>
        </form>
    </div>
  )
}

export default App
