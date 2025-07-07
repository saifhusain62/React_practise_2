import React, { useState } from 'react'

function Usestateobj() {
    const [obj , setobj] = useState({
        name:"asif",
        id:"01",
        class:"02"

        
    });

    const change = ()=>{
          setobj (prevobj =>({
            ...prevobj,
            name:"Saif",
            id:"02",
            class:"03"

          }))
    }

   return(
    <div>
        <h1>{obj.name} | {obj.id} | {obj.class}</h1>
        <button onClick={change}>Change</button>
      
    </div>

   )
  
}

export default Usestateobj
