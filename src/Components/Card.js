import React, { useContext } from 'react'
import UserContext from '../Context'

function Card(props) {
    const user = useContext(UserContext)
    
  return (
    <div className='container'>
        <h5>{user}</h5>
            <div className='row'>
                {
                    props.data.map((item) => {
                        return <div className='col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3'>
                            <div className="card" style={{ width: "18rem" ,borderLeft:item.color}}>

                                <div className="card-body">
                                    <h5 className="card-title">{item.Name}</h5>
                                    <p className="card-text">{item.Number}</p>

                                </div>
                            </div>
                        </div>
                    })

                }
            </div>
        </div>
  )
}

export default Card