import React, {useState} from 'react'
import { useInput } from '../Utilities/CustomHooks'
import Error from './Error'
import axios from "axios"
import '../CSS/style.css'

const LandingPage = ({onLogin}) => {

      const username = useInput("")
      const email = useInput("")
      const [error, setError] = useState("")

    
    const handleSubmit = async (event)=>{
      event.preventDefault()
      try{
        let res = await axios.get(`http://localhost:4000/users/${username.value}`)
        debugger
        if (res) {
          onLogin()}
      }catch(error){
        setError("Please Enter a Valid Username or Sign the F*ck Up")
      }

        
    }

    return (
        <>

        <div className="LandingPage">
    
        <div className="Container">
        <div className="header">
            Logo
        </div>
        <div className="popularPic">

        </div>
        <div className="signIn">
        <form onSubmit={handleSubmit}>

      
        <label> User Name:
          <input type="text"name={"username"}{...username}/>
        </label>
        <br></br>
        <label> email:
          <input type="text"name={"email"}{...email}/>
        </label>
        <button type="submit"></button>
        </form>

        </div>

        </div>


        { !error ? <Error message={error}/> : null}
        </div>

        </>
    )
}

export default LandingPage