import React from 'react'

const Input = ({...props}) => {
    
    return(
        <input className={props.className} type="text" placeholder={props.placeholder} {...props.input}/>
    )       
}

export default Input