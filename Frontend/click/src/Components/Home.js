import React, { useState, useEffect } from "react";
import ImageUpload from "./ImageUpload";
import Image from "./Image";
import axios from "axios";
import "../CSS/HomePage.css";

const Home = () => {
  const [randPics, setRandPics] = useState([]);

  const getRandPics = async () => {
    const randPicsUrl = `http://localhost:4000/images/hashtags/`;
    try {
      let res = await axios.get(randPicsUrl);
      setRandPics(res.data.payload);
    } catch (err) {
      setRandPics([]);
    }
  };

  useEffect(() => {
    getRandPics();
  }, []);

  let displayRandPics = randPics.map(pic => {
    return (
      <div className="imageContainer" key={pic.id}>
        <Image className="randPic" image={pic.picture} />
        {pic.user_hashtags.map((tag, idx) => (
          <p className="tags" key={idx}>
            #{tag}
          </p>
        ))}
      </div>
    );
  });

  return (
    <div className="Home">
      <div className="randomPics">{displayRandPics}</div>
    </div>
  );
};

export default Home;
