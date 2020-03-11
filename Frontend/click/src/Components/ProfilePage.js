import React, {useState, useEffect} from 'react'
import axios from "axios"
import '../CSS/ProfilePage.css'

const Profile = () => {
    const [images, setImages]=useState("")
    const [users, setUsers]=useState("")
    const getUserProfile =async()=>{
        const userProfile =`http://localhost:4000/users/${sessionStorage.username}`
        try{
            let res= await axios.get(userProfile)
            setUsers(res.data.payload[0].username)
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
        setTenImages("")
    }
}
useEffect(()=>{
    getTenPics()
    getUserProfile()
}, [])


    return (
   
        <>
        <div className ="Profile">
            
        <div className="userProfile">
        User Pics
        <img src={users} alt={""}  className="topPic"/>
        </div>
        <div className="userPics">
        User Pics
        <img src={tenImages} alt={""}  className="topPic"/>
        </div>
        </div>
        </>
    )
}

export default Profile