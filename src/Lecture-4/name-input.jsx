import React, { useState } from 'react'


// Take inpout from user and display below the input field
const NameInput = () => {

    const [name, setName] = useState("")

    const getUserName=(name)=>{
        setName(name.target.value)
    }


    return (
        <>
            <div>Name Input Component</div>
            <input type="text" placeholder='Enter your name' value={name} onChange={getUserName} />
            <p>Your name is: {name}</p>
        </>
    )
}

export default NameInput