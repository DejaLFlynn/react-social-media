import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useInput } from "../Utilities/CustomHooks";
import Image from "./Image";
import Input from "./Input";
import Error from "./Error";
import ClickModal from "./Modal"
import SignUpPage from "./SignUpPage"

import "../CSS/StarsBackground.css";
import "../CSS/LandingPage.css";

const LandingPage = ({ onLogin }) => {
  const username = useInput("");
  const email = useInput("");
  const [error, setError] = useState("");
  const [image, setImage] = useState("");
  const [totalVotes, settotalVotes] = useState("");

  const [modalIsOpen,setIsOpen] = useState(false)

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      let res = await axios.get(
        `http://localhost:4000/users/${username.value}`
      );

      if (res) {
        sessionStorage.setItem("username", username.value);
        sessionStorage.setItem("id", res.data.payload.id);
        console.log(onLogin);
        onLogin();
      }
    } catch (err) {
      console.log(error);
      setError("Please Enter a Valid Username or Sign the F*ck Up");
    }
  };
  const getTopPic = async () => {
    const imageUrl = `http://localhost:4000/votes`;

    try {
      let res = await axios.get(imageUrl);
      setImage(res.data.payload[0].picture);
      settotalVotes(res.data.payload[0].total_votes);
    } catch (error) {
      setImage("");
    }
  };

  useEffect(() => {
    getTopPic();
  }, []);

  const openModal = () =>  {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <>
      <div className="LandingPage">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>

        <div className="header">
          <div className="LogoLetter">C</div>
          <div className="headerSlogan">lick me til I scream!</div>
          {/* <img className="logo" src={lips} /> */}
        </div>

        <div className="popularImageContainer">
          <div className="popularImage">
            <Image image={image} alt={""} className="image" />
            <p>CLICKS: {totalVotes} </p>
          </div>
        </div>

        <div className="signIn">
          <div className="signInForm">
            <form className="form" onSubmit={handleSubmit}>
              <div>
                <Input
                  className={"userInputs"}
                  placeholder={"Enter Username"}
                  input={username}
                />
              </div>
              <div>
                <Input
                  className={"userInputs"}
                  placeholder={"Enter Password"}
                  input={email}
                />
              </div>

              <div>
                <button className="signInBtn" type="submit">
                  SIGN IN
                </button>
              </div>
            </form>


            <div className="signUpLink" onClick={openModal}>
              <p className="signUpLink">
                SIGN UP
              </p>
            </div>

            <div className="modalParentContainer">
            <ClickModal className="modal" modalIsOpen={modalIsOpen} modalClose={closeModal}>
                <SignUpPage modalClose={closeModal}/>
                <div>{error ? <Error className="Error" message={error} /> : null}</div>
            </ClickModal>
            </div>
           

          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
