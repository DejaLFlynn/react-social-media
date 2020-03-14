import React, {useState, useEffect} from 'react'
import axios from "axios"
import Image from "./Image"
import '../CSS/LandingPage/profilePage.css'


const Profile = () => {
    const [images, setImages]=useState([]);
    const [totalVotes, setTotalVotes]=useState([]);
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
        setImages(res.data.payload)
        setTotalVotes(res.data.payload)
    }catch(error){
        setImages([])
    }
}
useEffect(()=>{
    getImages()
    getUserProfile()
}, [])

let userPics = images.map(pic => {
    return <Image image={pic.picture} key={pic.id} />;
  });

  let picTotalVotes = totalVotes.map(vote => {
  return <p key={vote.id}>Total Votes: {vote.total_votes}</p>
  })

    return (
   
        <>
        <div className="Profile">
        <div className ="ProfileHeader">
        User Pics
        </div>

        <div className="userProfile">
        <img src={users} alt={""}  className="profilePic"/>
        <p>Hello {username}!!!</p>
        </div>
        
        <div className="userPics">
        Previous Voted pictures
        {userPics}
        {picTotalVotes}
        </div>
        
        </div>
        </>
    )
}

export default Profile