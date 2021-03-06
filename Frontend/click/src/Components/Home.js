import React, { useState, useEffect } from "react";
import Image from "./Image";
import axios from "axios";
import "../CSS/HomePage.css";

const Home = () => {
  const [randPics, setRandPics] = useState([]);
  const [topTenPics, setTopTenPics] = useState([]);

  const getRandPics = async () => {
    const randPicsUrl = `http://localhost:4000/images/hashtags/`;
    try {
      let res = await axios.get(randPicsUrl);
      setRandPics(res.data.payload);
    } catch (err) {
      setRandPics([]);
    }
  };

  const getTopTenPics = async () => {
    const topTenUrl = `http://localhost:4000/images/votes/`;
    try {
      let res = await axios.get(topTenUrl);
      setTopTenPics(res.data.payload);
    } catch (err) {
      setTopTenPics([]);
    }
  };

  useEffect(() => {
    getRandPics();
  }, []);

  useEffect(() => {
    getTopTenPics();
  }, []);

  const handleVote = async (id) => {
    try {
      await axios.post(`http://localhost:4000/images/votes`, {
        voter_id: sessionStorage.getItem('id'),
        picture_id: id
      })
      getRandPics();
    } catch (err) {
      setRandPics([])
    }
  }

  let displayRandPics = randPics.map(pic => {
    return (
      <div className="randImageContainer" key={pic.id + pic.picture} onClick={()=> handleVote(pic.id)}>
        <Image className="randPic" image={pic.picture}/>
        {pic.user_hashtags.map((tag, idx) => (
          <p className="tags" key={idx + tag}>
            #{tag}
          </p>
        ))}
      </div>
    );
  });

  let displayAllTenImages = topTenPics.map(pic => {
    return (
      <div className="topTenContainer" key={pic.picture + pic.total_votes}>
        <Image className="topTenPic" image={pic.picture} />
        <p>Total Clicks: {pic.total_votes}</p>
      </div>
    );
  });

  return (
    <div className="Home">
      <div className="Randomizer">{displayRandPics}</div>
      <div className="TopImages">{displayAllTenImages}</div>
    </div>
  );
};

export default Home;
