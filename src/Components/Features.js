import React, { useState } from 'react'
import axios from 'axios'
function Features() {
    const handleClick =async()=>{
        const res =await axios.post('http://localhost:59144/api/default/Insert',1)
        if(res.status===200){

          console.log('hi')
        }
   }
   const[txtBox,setTxtBox]=useState([])
   
   const generateTextBox=()=>{
    
    setTxtBox([...txtBox,[]])
   }
   const deletetextbox=(i)=>{
    txtBox.splice(i,1)
    setTxtBox([...txtBox])
   }
   const handleChange=(onChangeValue,i)=>{
    const inputdata=[...txtBox]
    inputdata[i]=onChangeValue.target.value;
    setTxtBox(inputdata)
   }
  return (
    <>
    <div>Features
        <button className='btn btn-primary' onClick={()=>{generateTextBox()}}>+</button>
        {
          txtBox.map((item,i)=>{
            return <div>
            <input type='text'value={item} onChange={e=>{handleChange(e,i)}} />
            <button className='btn btn-danger' style={{marginLeft:"1px"}} onClick={()=>{deletetextbox(i)}}>x</button>
            </div>
          })
        }
    </div>
    <div className='Container' style={{width:"500px",height:"500px",border:"1px solid red"}}>
      

    </div>
    </>
  )
}

export default Features