import React from 'react'
import axios from 'axios'
function Features() {
    const handleClick =async()=>{
        const res =await axios.post('http://localhost:59144/api/default/Insert',1)
        if(res.status===200){

          console.log('hi')
        }
   }
  return (
    <div>Features
        <button className='btn btn-primary' onClick={()=>{handleClick()}}>Sample</button>
    </div>
    
  )
}

export default Features