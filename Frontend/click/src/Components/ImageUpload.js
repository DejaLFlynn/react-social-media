import React, { useState } from 'react'
import axios from 'axios'


const ImageUpload = () => {
    
    cosnt [image, setImage] = useState(null)

    const handleUpload = async () => {
        setImage(event.target.files[0])
    }

    const imageUploadHandler = () => {
        const file = new FormData()
        file.append('image', image, image.name)
        let res = await axios.post(' ', file)
    }

    return(
        <form>
            <div className="">
                <input type="file" />
            </div>
            <div className="">
                <button className="" onClick={handleUpload}>Upload</button>
            </div>
        </form>
    )       
}

export default ImageUpload


event.target.files[0]