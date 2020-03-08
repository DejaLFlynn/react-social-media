import React, {useState, Profiler} from 'react'
import { useInput } from '../Utilities/CustomHooks';
import { useHistory } from 'react-router-dom';

const Home = () => {

      const fullname = useInput("")
      const username = useInput("")
      const email = useInput("")
      const age = useInput("")
      const profile_pic = useInput("")
    
  
    const history = useHistory() 
    
    const handleSubmit =(e)=>{
    e.preventDefault()
        history.push(`/users/${fullname.value}`)
        history.push(`/users/${username.value}`)
        history.push(`/users/${email.value}`)
        history.push(`/users/${age.value}`)
        history.push(`/users/${profile_pic.value}`)
    
        
    }

    return (
        <form onSubmit={handleSubmit}>
        <label> Full Name:
          <input type="text"{...fullname}/>
        </label>
        <label> User Name:
          <input type="text"{...username}/>
        </label>
        <label> email:
          <input type="text"{...email}/>
        </label>
        <label> Age:
          <input type="text"{...age}/>
        </label>
        <label> Profile Pic:
          <input type="text"{...profile_pic}/>
        </label>
    
     </form>
    )
}

export default Home


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