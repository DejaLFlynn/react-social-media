import React from 'react'
import { useState, useInput } from '../Utilities/CustomHooks'
import Error from './Error'
import axios from "axios"

const LandingPage = ({onLogin}) => {

      const username = useInput("")
      const email = useInput("")
      const [error, setError] = useState("")

    
    const handleSubmit = async (event)=>{
      event.preventDefault()
      try{
        let res = await axios.get(`http://localhost:3000/users/${username}`)
        if (res) {
          onLogin.handleAuthorization()}
      }catch(error){
        setError("Please Enter a Valid Username or Sign the F*ck Up")
      }
        
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
      
        <label> User Name:
          <input type="text"name={"username"}{...username}/>
        </label>
        <label> email:
          <input type="text"name={"email"}{...email}/>
        </label>
        </form>

        { error ? <Error message={error}/> : null}
        </>
    )
}

export default LandingPage