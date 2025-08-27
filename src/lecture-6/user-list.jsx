import React from 'react'

const UserList = () => {
    const users = ["Ali", "Sara", "Ahmed"];

  return (
    <>
    <div>UserList</div>
    {
        users.map((value,index)=>{
            return <h1 key={index} >{value}</h1>
        })
    }
    
    </>
    
  )
}

export default UserList