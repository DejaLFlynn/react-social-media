import React, {useState, useEffect} from 'react'
import axios from "axios"
import Image from "./Image"
import '../CSS/LandingPage/profilePage.css'

const Profile = () => {
    const [images, setImages]=useState([]);
    const [username, setUsername] =useState("");
    const [users, setUsers]=useState("");
    const getUserProfile =async()=>{
        const userProfile =`http://localhost:4000/users/${sessionStorage.username}`
        try{
            let res= await axios.get(userProfile)
            setUsername(res.data.payload[0].username)
            setUsers(res.data.payload[0].profile_pic)

        }catch(error){  
            setUsers("")
        }
    }

    const getImages = async()=>{
    const userImages = `http://localhost:4000/users/${sessionStorage.id}/images`
    try{
        let res = await axios.get(userImages)
        debugger
        setImages(res.data.payload[0].arr_pics)
    }catch(error){
        setImages([])
    }
}
useEffect(()=>{
    getImages()
    getUserProfile()
}, [])

let userPics = images.map(pic => {
    debugger
    return <Image image={pic} key={pic} />;
  });

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
        {userPics}
        {/* <table>
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
        <img src={images} alt={""}  className="topPic"/> */}
        </div>
        </div>
        </>
    )
}

export default Profile