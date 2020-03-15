import React, {useState, useEffect} from 'react'
import axios from "axios"
import Image from "./Image"
import '../CSS/profilePage.css'


const Profile = () => {
    const [images, setImages]=useState([]);
    // const [totalVotes, setTotalVotes]=useState([]);
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
        <div className="userGridImageContainer" key={pic.id}>
            <Image className="userGridImage" image={pic.picture} />
            <p>CLICKS: {pic.total_votes}</p>
        </div>
        );
    });


    return (
   
        <div className="Profile">

        <div className="profileHeaderPic">
        <div className="username">
            {username}
        </div>
        <div className='profilePicContainer'>
            <Image image={users} className={"profilePic"}/>
        </div>
        
        </div>

        <div className="userImageGrid">{userPics}</div>
        
        </div>
        
    )
}

export default Profile


