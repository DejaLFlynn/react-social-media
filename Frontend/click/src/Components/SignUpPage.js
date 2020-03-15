import React, { useState } from 'react'
import Error from './Error'
import { useInput } from '../Utilities/CustomHooks';
import axios from 'axios'
import '../CSS/SignUpPage.css'
import Input from './Input'


const SignUpPage =({onLogin, modalClose})=>{
    const username = useInput("")
    const email = useInput("")
    const fullname = useInput("")
    const age = useInput("")
    const profile_pic = useInput("")

    const [image, setImage] = useState(null)

    const [error, setError] = useState("")
    
    const handleUpload = (event) => {
        setImage(event.target.files[0])
    }

    const handleSubmit = async (event)=>{
      event.preventDefault()
      try{
        let res = await axios.post("http://localhost:4000/users", {
          email: email.value,    
          fullname: fullname.value,
          username: username.value,
          age: age.value,
          profile_pic: profile_pic.value
          });
        if (res) {
          sessionStorage.setItem("username", username.value);
          sessionStorage.setItem("id", res.data.payload.id)
          onLogin()
          modalClose()
        }
        }catch(error){
          setError("Invalid Input: Username and/or Email Exists")

        }
        
    }


    return (
      <>
        <div className="signUpFormContainer">

        <form className="signUpForm" onSubmit={handleSubmit}>
          <div className="inputContainer" >
            <Input className="input" type={"text"} name={"username"} placeholder={"Pick a Username"} input={username}/>
          </div>

          <div className="inputContainer" >
            <Input className="input" type={"text"} name={"email"} placeholder={"Email"} input={email}/>
          </div>

          <div className="inputContainer" >
            <Input className="input" type={"text"} name={"fullname"} placeholder={"Full Name"} input={fullname}/>
          </div>

          <div className="inputContainer" >
          <Input className="input" type={"number"} name={"age"} placeholder={"Age"} input={age}/>
          </div>

          <div className="uploadImage" >
            <label> Upload Profile Pic:
            <input className="uploadImage" type="file" name={"profilePic"} onChange={(event) => handleUpload(event)}/>
            </label>
          </div>
          
      
            <button className="signUpButton" type="submit">Login</button>
          
      
        </form>
        
        <div>
        { error ? <Error message={error}/> : null}
        </div>
        
      </div>
        

      </>
      );

}
export default SignUpPage;




// onFirstNameBlur = () => {
//   const { firstName } = this.state;  const firstNameError = this.validateName( firstName );  return this.setState({ firstNameError });
// };

// validateName = name => {
//   const regex = /[A-Za-z]{3,}/;
//   return !regex.test(name)
//      ? "The name must contain at least three letters..."
//      : "";
//}