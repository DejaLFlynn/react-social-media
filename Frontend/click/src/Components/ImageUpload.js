import React, { useState } from 'react'
import axios from 'axios'
import Input from './Input'


const ImageUpload = () => {
    
    const [image, setImage] = useState(null)
    const [hashtag, setHashtag] = useState(null)

    const handleUpload = (event) => {
        setImage(event.target.files[0])
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append("image", image)
        console.log(image)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        event.target.image.value = null
        event.target.hashtag = null //Better Way of Coding?
        try { 
            let res = await axios.post('http://localhost:4000/upload', formData, config)
            let imageUrl = res.data.imageUrl
            let res = await axios.post(`http://localhost:4000/${sessionStorage.id}/images`, {
                image: imageUrl
            })
            debugger
        } catch (error) {
            console.log(error)
        }
     }

    return(
        <form onSubmit={handleSubmit}>
            <div className="">
                <input type={"file"} name={"image"} onChange={(event) => handleUpload(event)}/>
            </div>
            <div>
                <Input type={"text"} name={'hashtag'} placeholder={'Enter Hashtags Separated by Commas'}/>
            </div>
            <div>
                <button type='submit'></button>
            </div>
        </form>
    )       
}

export default ImageUpload
