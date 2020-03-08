import React, {useState} from 'react'
import { useInput } from '../Utilities/CustomHooks'
import Error from './Error'
import axios from "axios"

const LandingPage = ({onLogin}) => {

      const username = useInput("")
      const email = useInput("")
      const [error, setError] = useState("")

    
    const handleSubmit = async (event)=>{
      event.preventDefault()
      try{
        let res = await axios.get(`http://localhost:4000/users/${username.value}`)
        console.log(res)
        if (res) {
          onLogin.handleAuthorization()}
      }catch(error){
        setError("Please Enter a Valid Username or Sign the F*ck Up")
      }

        
    }

    return (
        <>
        <form onSubmit={(event) => {handleSubmit(event)}}>
      
        <label> User Name:
          <input type="text"name={"username"}{...username}/>
        </label>
        <label> email:
          <input type="text"name={"email"}{...email}/>
        </label>
        <button type="submit"></button>
        </form>
        
        { !error ? <Error message={error}/> : null}
        </>
    )
}

export default LandingPage