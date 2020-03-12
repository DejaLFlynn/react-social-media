import React, { useState } from 'react'
import axios from 'axios'
import Input from './Input'


const ImageUpload = () => {
    
    const [image, setImage] = useState(null)
    const [hashtag, setHashtag] = useState(null)

    const handleUpload = (event) => {
        setImage(event.target.files[0])
    }

    const imageUploadHandler = async () => {
        const formData = new FormData()
        formData.append(image, image.name)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        try { 
            let res = await axios.post('/upload', formData, config)
            debugger
        } catch (error) {
            console.log(error)
        }
     }

    return(
        <form onSubmit={imageUploadHandler}>
            <div className="">
                <Input type="file" name="image"/>
            </div>
            <div className="">
                <button className="" onClick={handleUpload}>Upload</button>
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
