import React, { useState } from 'react'
import { useInput } from '../Utilities/CustomHooks'
import axios from 'axios'
import Input from './Input'
import '../CSS/ImageUpload.css'

const ImageUpload = ({modalClose}) => {
    
    const [image, setImage] = useState(null)
    const hashtag = useInput("")

    const handleUpload = (event) => {
        setImage(event.target.files[0])
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        event.target.hashtag.value = null //Better Way of Coding?
        event.target.image.value = null
        const formData = new FormData()
        formData.append("image", image)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        try { 
            let res = await axios.post('http://localhost:4000/upload', formData, config)
            let imageUrl = res.data.imageUrl
            let resImage = await axios.post(`http://localhost:4000/users/${sessionStorage.id}/images`, {
                image: imageUrl
            })
            let imageId = resImage.data.payload.id
            let resHashtag = await axios.post('http://localhost:4000/images/hashtags', {
                picture_id: imageId,
                body: hashtag.value
            })
            modalClose()
        } catch (error) {
            //errorAlert = "Image Failed to Upload"
        }
     }

    return(
        <div className="uploadContainer">
            <form className="uploadForm" onSubmit={handleSubmit}>
                <div className="uploadImage">
                    <p>Choose Your Comedic Gold</p>
                    <input className="uploadImage" type="file" name="image" onChange={(event) => handleUpload(event)}/>
                </div>
                <div className="inputContainer">
                    <Input className="input" type={"text"} name={'hashtag'} placeholder={'Enter Hashtags w/ Spaces'} input={hashtag}/>
                </div>
                <div className="submit">
                    <button className="submitButton" type='submit'>UPLOAD</button>
                    <p>MAKE US CRY LAUGHING</p>
                </div>
            </form>
        </div>
    )       
}

export default ImageUpload

