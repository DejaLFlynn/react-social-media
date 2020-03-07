import React from 'react'
import Form from './Input'

const Form = (props) => {
    
    const handleSubmit = (event) => {
        event.preventDefault()
        
    }

    return(
        <form onSubmit={handleSubmit}>

        </form>

    )
}

export default Form
