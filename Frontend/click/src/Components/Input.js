import React from 'react'

const Input = ({placeholder, input}) => {
    
    return(
        <input type="text" placeholder={placeholder} {...input}/>
    )       
}

export default Input