import React from 'react'

const Wrapper = ({ title, children }) => {
    return (
        <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
            <h3>{title}</h3>
            <div>{children}</div>
          <button>Click Me</button>
        </div>
    )
}

export default Wrapper
