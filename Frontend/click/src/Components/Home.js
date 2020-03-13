<<<<<<< HEAD
import React, {useState, useEffect } from 'react';
import ImageUpload from './ImageUpload';
// import { useInput } from "../Utilities/CustomHooks";
import Image from './Image'
import axios from 'axios';
=======
import React from "react";
import ImageUpload from "./ImageUpload";
import Image from "./Image";
import "../CSS/HomePage.css";
>>>>>>> 1238dffd85401a4f2edb6b030331065539f140dc

const Home = () => {
  const [randPics, setRandPics]= useState([]);
  // const [search, setSearch]= useState("")
  // const search= useInput("");

  const getRandPics = async ()=> {
    const randPicsUrl = `http://localhost:4000/images/hashtags/`
    try{
      let res = await axios.get(randPicsUrl)
      setRandPics(res.data.payload)

    }catch(err){
      setRandPics([])
    }
  }

  const searchPics = async (input) => {
    const searchRandPicUrl = `http://localhost:4000/images/hashtags/${input.value}`;
    try {
      let res = await axios.get(searchRandPicUrl);
      debugger
    } catch (err) {
      // setSearch("")
    }
  };

  useEffect(()=>{
    // searchPics()
    getRandPics()   
}, []);

let displayRandPics = randPics.map(pic =>{
  return <li className="randPic" key={pic.id}><Image image={pic.picture}/> 
    {pic.user_hashtags.map((tag, idx)=>(
      <p className="tags" key={idx} >#{tag}</p>

    ))}
    </li>
})


  return (
    <div className="Home">
      <ImageUpload />
<<<<<<< HEAD
    <ul className="randomPics">
      {displayRandPics}
    </ul>
=======
>>>>>>> 1238dffd85401a4f2edb6b030331065539f140dc
    </div>
  );
};

export default Home;
