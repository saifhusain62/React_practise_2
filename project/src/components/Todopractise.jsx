import React, { useState } from 'react'

function Todopractise() {

    const [list,setList] = useState([])
    const [item,setItem] = useState("")

    const addList = ()=>{
        list.push(item)
        setList([...list])
    }
    const removeitem = (i)=>{
        list.splice(i,1)
        setList([...list])
    }
  return (
    <div>
        <table>
            <tbody>
                  {
                    list.length!==0?(
                        list.map((element,i)=>{
                            return(
                                <tr>
                                    <td>{element}</td>
                                    <td><button onClick={()=>removeitem(i)}>Remove</button></td>
                                </tr>
                            )
                        })

                    ):(<tr></tr>)
                  }
            </tbody>
        </table>
      



     
      <input placeholder='text here' onChange={(e)=>setItem(e.target.value)}/>
      <button onClick={addList}>ADD</button>
    </div>
  )
}

export default Todopractise
