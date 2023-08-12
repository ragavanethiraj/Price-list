import React, { useState } from 'react'


function Calculator() {
    const[firstVal,setFirstVal]=useState("")
    const[secondVal,setSecondVal]=useState("")
    const[result,setResult]=useState(0)
   const[inputButtons,setButton]=useState(["+","-","/","*"])
   const[eventName,setName]=useState("")
    const btnCalculate=(item,i)=>{
        setName(item)
        var first=parseInt(firstVal)
        var second=parseInt(secondVal)
        
        if(item==='+')
        {
        setResult(first+second)
        }
        else if(item==='-')
        {
            setResult(first-second)
        }
        else if(item==='*')
        {
            setResult(first*second)
        }
        else if(item==='/')
        {
            setResult(parseFloat(first/second))
        }
        
    }
    function btnReset()
    {
        setFirstVal("")
        setSecondVal("")
        setResult(0)
        setName("")
    }
    const test=(item,i)=>{
        console.log(item)
    }
  return (
    <div className='container'>
        <table className='center'>
            <tr>
                <td><input type='text' name="firstVal" value={firstVal} onChange={e=>{setFirstVal(e.target.value)}} ></input>        </td>
            </tr>
            <tr>
                <td><input type='text' name="secondVal" value={secondVal} onChange={e=>{setSecondVal(e.target.value)}}></input></td>
            </tr>    
            <tr>
                <td>
                    <button> You have clicked {eventName}</button>
                </td>
            </tr>        
            <tr>
                <td>
                    {
                        inputButtons.map((item,i)=>{
                            return <button onClick={()=>{btnCalculate(item,i)}}>{item}</button>
                        })
                    }
                </td>

               
                    
                {/*<button onClick={btnCalculate}>+</button>
                <button onClick={btnCalculate} >-</button>
                <button onClick={btnCalculate} >/</button>
                <button onClick={btnCalculate} >*</button>
                </td>*/}

            </tr>
           
            <tr>
                <td><button className='btn btn-primary'>{result}</button></td>
            </tr>
            <tr>
                <td><button onClick={btnReset} >Reset</button></td>
            </tr>
        </table>
    </div>
  )
}

export default Calculator