import React, {useState, useEffect} from 'react'
import axios from "axios"

const Profile = () => {
    const [tenImages, setTenImages]=useState("")
    const [users, setUsers]=useState("")
    const getUserProfile =async()=>{
        const userProfile =`http://localhost:4000/users/${sessionStorage.username}`
        try{
            let res= await axios.get(userProfile)
            setUsers(res.data)
            debugger

        }catch(error){  
            setUsers("")
        }
    }

    const getTenPics = async()=>{
    const tenUrls = `http://localhost:4000/users/:id/images`
    try{
        let res = await axios.get(tenUrls)
        setTenImages(res.data.payload[0].picture)
    }catch(error){
        setTenImages("")
    }
}
useEffect(()=>{
    getTenPics()
    getUserProfile()
})


    return (
   
        <>
        <div className ="Profile">
            
        <div className="userPics">
        User Pics
        <img src={tenImages} alt={""}  className="topPic"/>
        </div>
        <div className="userProfile">
        User Pics
        <img src={users} alt={""}  className="topPic"/>
        </div>
        </div>
        </>
    )
}

export default Profile