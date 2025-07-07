import React, { useState } from 'react'

function UsestateTodo() {

    const [list,setList] = useState([])
    const [item,setItem] = useState("")

    const AddTolist = () =>{
        list.push(item)
        setList([...list])

    }

    const RemoveItem  = (i)=>{
          list.pop(i,1)
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
                                            <td>
                                               {element}
                                            </td>
                                            <td>
                                                <button onClick={()=>RemoveItem(i)}>Remove</button>
                                                
                                            </td>
                                        </tr>
                                    )

                                })

                            ):(<tr></tr>)
                        }
                  </tbody>
                

        </table>
        
        <input placeholder='item' onChange={(e)=>setItem(e.target.value)}/>
      <button onClick={AddTolist}>Add</button>
    </div>
  )
}

export default UsestateTodo
