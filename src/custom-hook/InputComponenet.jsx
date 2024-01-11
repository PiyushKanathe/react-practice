import React from 'react'
import useInput from './useInput'

const InputComponent = () => {
    const nameInput = useInput('')

    const handleSubmit = (e) => {
        e.preventDefault();
        nameInput.resetValue()
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' {...nameInput} />
            <p>{nameInput.value}</p>
            <button type='submit' >Submit</button>
        </form>
    )
}

export default InputComponent;