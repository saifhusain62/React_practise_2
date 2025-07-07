import React, { useState } from 'react'

function Usestateobj2() {
    const [number,setnumber] = useState({
        key1:"Hello World",
        key2:"Hi Dear"
    })

    const change = ()=>{
        setnumber(prevobj=>({
            ...prevobj,
            key1:"Hi dead",
            key2:"Saif"
        }))
    }


  return (
    <div>
        <h1>{number.key1} | {number.key2}</h1>
        <button onClick={change}>Change</button>
      
    </div>
  )
}

export default Usestateobj2
