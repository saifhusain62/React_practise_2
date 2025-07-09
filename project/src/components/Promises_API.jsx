import React, { useEffect, useState } from 'react'

function Promises_API() {
        
    const [data,setdata] = useState();
    
    
    useEffect(()=>{

        fetch("https://dummyjson.com/test")
        .then(res=>res.json())
        .then(json=>setdata(json))

    },[]);
  return (
    <div>
      <p>{JSON.stringify(data)}</p>
    </div>
  )
}

export default Promises_API
