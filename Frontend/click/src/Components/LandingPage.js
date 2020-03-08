import React from 'react'
import { useInput } from '../Utilities/CustomHooks';
import axios from "axios"

const LandingPage = ({onLogin}) => {

      const username = useInput("")
      const email = useInput("")

    
    const handleSubmit = async (e)=>{
      e.preventDefault()
      try{
        let res = await axios.get(`http://localhost:3000/users/${username}`)
        onLogin.handleAuthorization()
      }catch(error){
        console.log(error)
      }
        
    }


    return (
        <form onSubmit={handleSubmit}>
      
        <label> User Name:
          <input type="text"name={"username"}{...username}/>
        </label>
        <label> email:
          <input type="text"name={"email"}{...email}/>
        </label>
     
    
     </form>
    )
}

export default LandingPage


// let form = document.querySelector("#form");
// let p = document.querySelector("#invalidLogin");
    
// const getUserLogin = async (username) => {
//   try {
//       let res = await axios.get(`http://localhost:3000/users/${username}`);
//       console.log(username)
//       if (res.data.user) {
//         sessionStorage.setItem("username", username);
//         sessionStorage.setItem("id", res.data.user.id)
//         window.location.href = "../HomePage/index.html"
//       } 
//     } catch (err) {
//       p.innerHTML = "Please Enter a Valid Username or Sign the F*ck Up"
//     }
// }
  
// form.addEventListener("submit", (event) => {
//   p.innerHTML = "";
//   event.preventDefault();
//   let username = document.querySelector("#username").value;
//   getUserLogin(username)
//   form.reset()
// })