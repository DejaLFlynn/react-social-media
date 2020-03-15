import React, { useState, useEffect } from "react";
import ImageUpload from "./ImageUpload";
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

  let displayRandPics = randPics.map(pic => {
    return (
      <div className="imageContainer" key={pic.id + pic.picture}>
        <Image className="randPic" image={pic.picture} />
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
      <div className="randomPics">{displayRandPics}</div>
      <div className="topTen">{displayAllTenImages}</div>
    </div>
  );
};

export default Home;
