import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import Modal from 'react-modal';
import axios from 'axios'
import Input from './Input'
import ClickModal from './Modal'
import ImageUpload from './ImageUpload'
import {useInput} from '../Utilities/CustomHooks'


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
      }

    
    return (
        <nav>
            { NavButton ? <NavLink to={"/Home"}><button onClick={handleNavButton}>HOME</button></NavLink> : <NavLink to={"/Profile"}><button onClick={handleNavButton}>Profile</button></NavLink> }
            <form onSubmit={handleOnSubmit}>
                <Input placeholder={"Search Hashtags"} input={input}/>
            </form>
            
            <button onClick={openModal}>Click</button>
            <ClickModal modalIsOpen={modalIsOpen} modalClose={closeModal}>
                <ImageUpload />
                
            </ClickModal>

        </nav>
    )
}

export default NavBar
