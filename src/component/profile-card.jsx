// import React from 'react'

// const ProfileCard = (props) => {
//   return (
//         <>
//     <div>
//         <h1>Name: {props.name}</h1>
//         <p>Position:{props.position}</p>
//     </div>
//     </>
//   )
// }

// export default ProfileCard

// Or using destructuring: 

// import React from 'react'

// const ProfileCard = ({name,position}) => {
//   return (
//         <>
//     <div>
//         <h1>Name: {name}</h1>
//         <p>Position:{position}</p>
//     </div>
//     </>
//   )
// }

// export default ProfileCard

// Or using destructuring and saving in the vraibale;

import React from 'react'

const ProfileCard = (props) => {
  // best pratice to destructure in the function body
  const {name, position} = props;
  return (
        <>
    <div>
        <h1>Name: {name}</h1>
        <p>Position:{position}</p>
    </div>
    </>
  )
}

export default ProfileCard