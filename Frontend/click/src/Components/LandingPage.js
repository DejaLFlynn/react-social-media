import React, {useState, useEffect} from 'react'
import axios from "axios"
import {Link} from 'react-router-dom'
import { useInput } from '../Utilities/CustomHooks'

import Input from './Input'
import Error from './Error'

import '../CSS/LandingPage/style.css'


const LandingPage = ({onLogin}) => {

      const username = useInput("")
      const email = useInput("")
      const [error, setError] = useState("")
      const [images, setImages] = useState("")

    
    const handleSubmit = async (event)=>{
      event.preventDefault()
      try{
        let res = await axios.get(`http://localhost:4000/users/${username.value}`)
    
        if (res) {
          sessionStorage.setItem("username", username.value);
          sessionStorage.setItem("id", res.data.payload.id)
          onLogin()
        }
      }catch(error){
        setError("Please Enter a Valid Username or Sign the F*ck Up")
      }

        
    }
    const getTopPic = async()=>{
        const imageUrl = `http://localhost:4000/votes`
      
        try{
            let res = await axios.get(imageUrl)
            setImages(res.data.payload[0].picture)
        }catch(error){
            setImages("")
        }
    }
  
    useEffect(()=>{

            getTopPic()
   
    },[])
   

     
    return (
        <>

          <div className="LandingPage">
    
            <div className="Container">
              <div className="header">
                Logo
              </div>
              
              <div className="popularPic">
              <img src={images} alt={""}  className="topPic"/>
              </div>
              
              <div className="signIn"> 
                <form onSubmit={handleSubmit}>

                    <Input placeholder={"Enter Username"} input={username}/>
                  
                  <br></br>
  
                    <Input placeholder={"Enter Email"} input={email}/>  
                
                  <br></br>
                  
                  <button className="signInBtn" type="submit">Sign In</button>
                  
                  <br></br>
                  
                  <Link to={'/SignUp'}>Sign Up</Link>
                
                </form>

              </div>

            </div>
            <div>
            { !error ? <Error message={error}/> : null}
            </div>
          </div>

        </>
    )
}

export default LandingPage;