import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import Modal from 'react-modal';
import axios from 'axios'
import Input from './Input'
import ClickModal from './Modal'
import ImageUpload from './ImageUpload'
import {useInput} from '../Utilities/CustomHooks'
import "../CSS/NavBar.css"


const NavBar = () => {
    
    const [NavButton, setNavButton] = useState(false)
    const [modalIsOpen,setIsOpen] = useState(false)
    
    const handleNavButton = () => {
        setNavButton(!NavButton)
    }

    const input = useInput("")

    const fetchHashtags = async (url) => {
        try {
            let res = await axios.get(url)
            let hashtags = res.data.payload
            console.log(hashtags)
        } catch (error) {
            console.log(error)
        }
    }

    const handleOnSubmit = async (event) => {
        event.preventDefault()
        fetchHashtags(`http://localhost:4000/hashtags/${input.value}`) //Fix Connection
        
    }

    const openModal = () =>  {
        setIsOpen(true);
      }

    const closeModal = () => {
        setIsOpen(false);
        console.log(modalIsOpen)
      }

    
    return (
        <nav className="navBarComponent">
        <nav className="navBarContainer">
            <div className="brand">
                <p>CLICK</p>
            </div>
            
            <div className="navBar">

            { NavButton ? <NavLink to={"/Home"}><button className="navButton" onClick={handleNavButton}>HOME</button></NavLink> : <NavLink to={"/Profile"}><button className="navButton"  onClick={handleNavButton}>PROFILE</button></NavLink> }
            
            <form className="search" onSubmit={handleOnSubmit}>
                <Input className={"search"}placeholder={"Search Hashtags"} input={input}/>
            </form>
            
            <button className="uploadButton" onClick={openModal}>Upload</button>
            
            <ClickModal className="modal" modalIsOpen={modalIsOpen} modalClose={closeModal}>
                <ImageUpload modalClose={closeModal}/>
            </ClickModal>
            </div>

        </nav>
        </nav>
    )
}

export default NavBar
