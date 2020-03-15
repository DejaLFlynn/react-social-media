import React, {useState, useEffect} from 'react'
import axios from "axios"
import Image from "./Image"
import '../CSS/profilePage.css'


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
    return (
      <div className="listOfPicsContainer" key={pic.id}>
        <Image className="listPic" image={pic.picture} />
        
      </div>
    );
  });

  let picTotalVotes = totalVotes.map(vote => {
  return <p key={vote.id}>Total Votes: {vote.total_votes}</p>
  })

    return (
   
        <div className="Profile">

        <div className="profileHeaderPic">
        <div className="username">
            {username}
        </div>
        <div>
            <Image image={users} className={"image"}/>
        </div>
        
        </div>

        <div className="list">{userPics}</div>
        
        <div className="totalPics">{picTotalVotes}</div>
        
        </div>
        
    )
}

export default Profile


