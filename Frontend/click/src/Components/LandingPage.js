import React, {useState, useEffect} from 'react'
import { useInput } from '../Utilities/CustomHooks'
import Error from './Error'
import axios from "axios"
import '../CSS/style.css'

const LandingPage = ({onLogin}) => {

      const username = useInput("")
      const email = useInput("")
      const [error, setError] = useState("")
      const [images, setImages] = useState("")

    
    const handleSubmit = async (event)=>{
      event.preventDefault()
      try{
        let res = await axios.get(`http://localhost:4000/users/${username.value}`)
        debugger
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
            debugger
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

                  <label> User Name:
                    <input type="text"name={"username"}{...username}/>
                  </label>
                  <br></br>
                  <label> Email:
                    <input type="text"name={"email"}{...email}/>
                  </label>
                  <br></br>
                  <button className="signInBtn" type="submit">Sign In</button>
                  <br></br>
                  <button className="signUpBtn">Sign Up</button>
                </form>

              </div>

            </div>


            { !error ? <Error message={error}/> : null}
          </div>

        </>
    )
}

export default LandingPage;