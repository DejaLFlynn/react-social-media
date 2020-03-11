import React, {useState, useEffect} from 'react'
import axios from "axios"
import '../CSS/ProfilePage.css'

const Profile = () => {
    const [images, setImages]=useState("");
    const [username, setUsername] =useState("");
    const [users, setUsers]=useState("");
    const getUserProfile =async()=>{
        const userProfile =`http://localhost:4000/users/${sessionStorage.username}`
        try{
            let res= await axios.get(userProfile)
            setUsername(res.data.payload[0].username)
            setUsers(res.data.payload[0].profile_pic)
            debugger

        }catch(error){  
            setUsers("")
        }
    }

    const getImages = async()=>{
    const userImages = `http://localhost:4000/users/${sessionStorage.id}/images`
    try{
        let res = await axios.get(userImages)
        setImages(res.data.payload[0].picture)
    }catch(error){
        setImages("")
    }
}
useEffect(()=>{
    getImages()
    getUserProfile()
}, [])


    return (
   
        <>
        <div className ="Profile">
            
        <div className="userProfile">
        <p>Hello {username}!!!</p>
        User Pics
        <img src={users} alt={""}  className="topPic"/>
        </div>
        <div className="userPics">
        User Pics
        <table>
<tbody>
<tr>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
</tbody>
</table>
        <img src={images} alt={""}  className="topPic"/>
        </div>
        </div>
        </>
    )
}

export default Profile