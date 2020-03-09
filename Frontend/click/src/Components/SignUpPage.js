import React from 'react'
import { useInput } from '../Utilities/CustomHooks';
import axios from 'axios'

const SignUpPage =({onLogin})=>{
    const username = useInput("")
    const email = useInput("")
    const fullname = useInput("")
    const age = useInput("")
    const profile_pic = useInput("")

    const [error, setError] = useState("")

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
          sessionStorage.setItem("id", res.data.newUser.id)
          onLogin()
        }
        }catch(error){
          setError("Invalid Input: Username and/or Email Exists")

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
        
        { !error ? <Error message={error}/> : null}

      </>
      );

}
export default SignUpPage;
