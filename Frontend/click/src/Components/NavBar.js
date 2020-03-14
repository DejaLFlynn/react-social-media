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
        <nav className="navBarContainer">
        <nav className="nav">
            { NavButton ? <NavLink to={"/Home"}><button onClick={handleNavButton}>HOME</button></NavLink> : <NavLink to={"/Profile"}><button onClick={handleNavButton}>Profile</button></NavLink> }
            <form onSubmit={handleOnSubmit}>
                <Input placeholder={"Search Hashtags"} input={input}/>
            </form>
            
            <button onClick={openModal}>Click</button>
            
            <ClickModal modalIsOpen={modalIsOpen}>
                <ImageUpload modalClose={closeModal}/>
            </ClickModal>

        </nav>
        </nav>
    )
}

export default NavBar
