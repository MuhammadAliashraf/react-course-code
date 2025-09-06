 import React, { useEffect } from "react";

 function Logger() {



    
 useEffect(() => {
 console.log("Component mounted!");
 }, []);

 return <h2>Check your console 👀</h2>;
 }

 export default Logger;