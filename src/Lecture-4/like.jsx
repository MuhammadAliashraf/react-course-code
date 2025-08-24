import React, { useState } from 'react'

const Like = () => {
   const [liked,setLiked] =useState(false)    

    // if(){

    // } else {

    // }
    // ? = if
    // : = else
    // liked ? '❤️ Liked' : '🤍 Like'
    // make a function to toggle the like state
    // const toggleLike = () => {
    //     setLiked(!liked)
    // }
  return (
    <>
    <div>Please Like Me </div>
    <button onClick={() => setLiked(!liked)}>
         {liked ? '❤️ Liked' : '🤍 Like'}
            </button>

    </>
  )
}

export default Like