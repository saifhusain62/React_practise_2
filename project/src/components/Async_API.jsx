import React, { useEffect, useState } from 'react'

function Async_API() {

    const[data,setdata] = useState();



    useEffect(()=>{
          
        (async()=>{

            let responce = await fetch( "https://dummyjson.com/products/1")
            let json = await responce.json();
            setdata(json);


        })()



    },[])
  return (
    <div>
        <p>{JSON.stringify(data)}</p>
      
    </div>
  )
}

export default Async_API
