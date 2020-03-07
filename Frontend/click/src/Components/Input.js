import React from 'react'
import {useInput} from '../Utilities/CustomHooks'

const Input = (props) => {
    
    const input = useInput("")

    return(
        <input type="text" placeholder={props.placeholder} {...input}/>
    )
}

export default Input