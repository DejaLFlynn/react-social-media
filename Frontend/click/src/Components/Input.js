import React from 'react'

const Input = ({...props}) => {
    
    return(
        <input className={props.className} type={props.type} placeholder={props.placeholder} {...props.input}/>
    )       
}

export default Input