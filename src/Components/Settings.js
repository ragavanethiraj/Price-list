import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/feature'

function Settings() {
  const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
      <button className='btn btn-sm btn-outline-danger m-2' onClick={()=>dispatch(decrement())}>-</button>
      {count}
      <button className='btn btn-sm btn-outline-primary m-2' onClick={()=>dispatch(increment())}>+</button>
    </div>
  )
}

export default Settings