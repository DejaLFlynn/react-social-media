import React, {useState, useEffect, useRef} from 'react'

export const usePrevState = (prevState) => {
    const ref = useRef();
    
    useEffect(() => {
        ref.current = prevState;
    });
    
    return ref.current;
    }


export const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue)

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    return {value, onChange:handleChange}
    }
