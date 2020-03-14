import React from 'react'

const Image = ({image, className}) => {
    
    return(
        <img src={image} className={className} alt=""/>
    )       
}

export default Image