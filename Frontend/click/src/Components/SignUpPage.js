import React from 'react'
import { useInput } from '../Utilities/CustomHooks';
import axios from 'axios'

const SignUpPage =({onLogin})=>{
    const username = useInput("")
    const email = useInput("")
    const fullname = useInput("")
    const age = useInput("")
    const profile_pic = useInput("")


    const handleSubmit = async (e)=>{
        onLogin.handleAuthorization()
        e.preventDefault()
        try{
            let res = await axios.post("http://localhost:3000/users", {
                email: email.value,    
                fullname: name.value,
                username: username.value,
                age: age.value,
                profile_pic: profile_pic.value
                });
         
        }catch(error){
            console.log(error)

        }
        
    }




    return (
        <div className="SignUpPage">
    
    <form onSubmit={handleSubmit}>
      
      <label> User Name:
        <input type="text"name={"username"}{...username}/>
      </label>
      <label> email:
        <input type="text"name={"email"}{...email}/>
      </label>
      <label> Name:
        <input type="text"name={"fullname"}{...fullname}/>
      </label>
      <label> Age:
        <input type="number"name={"age"}{...age}/>
      </label>
      <label> Profile Pic:
        <input type="text"name={"profile_pic"}{...profile_pic}/>
      </label>
  
   </form>
        
        </div>
      );

}
export default SignUpPage;
