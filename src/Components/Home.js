import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Home() {
    
    return (
        <>
        <div className='container my-4'>
            <Link to={'card'}>

        <button className='btn btn-sm btn-outline-primary mx-2'>Card</button>
            </Link>
        <Link to={'profile'}>
        <button className='btn btn-sm btn-outline-primary mx-2'>Profile</button>
        </Link>
        <Link to={'setting'}>
        <button className='btn btn-sm btn-outline-primary mx-2'>Settings</button>
        </Link>
        </div>
       
        <Outlet/>
        </>
    )
}

export default Home