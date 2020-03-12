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
            setUsername(res.data.payload.username)
            setUsers(res.data.payload.profile_pic)

        }catch(error){  
            setUsers("")
        }
    }

    const getImages = async()=>{
    const userImages = `http://localhost:4000/users/${sessionStorage.id}/images`
    try{
        let res = await axios.get(userImages)
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
        User Pics
        <div className="userProfile">
        <img src={users} alt={""}  className="profilePic"/>
        <p>Hello {username}!!!</p>
        </div>
        </div>
        <div className="userPics">
        User Pics
        {userPics}
        </div>
        </>
    )
}

export default Profile