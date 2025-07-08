import React, { useState } from 'react'

function FormusingState() {

    const[Form,setForm] = useState({
        fname:"",
        lname:"",
        city:"Dhaka",
        gender:"Female"
    })

    const Inputchange = (property,value) =>{

        setForm(preobj=>({
            ...preobj,
            [property] :value
        }))
        }

        const Formsubmit = (e) =>{
            e.preventDefault();
            console.log(Form)
        }

    
  return (
    <div>
      <div className='container'>
        <form onSubmit={Formsubmit}>
            <input placeholder='First Name' value={Form.fname} onChange={(e)=>{Inputchange("fname",e.target.value)}}/> <br />
            <input placeholder='Last Name' value={Form.lname} onChange={(e)=>{Inputchange("lname",e.target.value)}}/>
            <br />
            <select name="" id="" value={Form.city} onChange={(e)=>{Inputchange("city",e.target.value)}}>
                <option value="">Choose City</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Dhaka">Jessore</option>
            </select>
            <br />
            <input type="radio" name='gender' checked={Form.gender=="Male"} onChange={()=>{Inputchange("gender",'Male')}}/>Male
            <input type="radio" name='gender' checked={Form.gender=="Female"} onChange={()=>{Inputchange("gender",'Female')}}/>Female
            <br />
            <button type='submit'>Submit</button>
        </form>

      </div>
    </div>
  )
}


export default FormusingState
