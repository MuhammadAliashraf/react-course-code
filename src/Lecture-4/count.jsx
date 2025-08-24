import React, { useState } from 'react'

const Count = () => {

    const [totalCount,setTotalCount] = useState(0)

  return (
    <>
    <div>Counter Application</div>
    <p>Total Clicks: {totalCount}</p>
    <button  onClick={()=>setTotalCount(totalCount + 1)}>Click Me</button>
    </>
  )
}

export default Count