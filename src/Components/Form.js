import React, { useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'

function Form() {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })
    const [list,setList]=useState([])
    // const [lastName,setLastName]=useState("")
    // const [email,setEmail]=useState("")
    // const [password,setPassword]=useState("")

    const handleSubmit = () => {
        if (data.firstName === "") {
            return toast.error("Enter your First Name")
        }
        setList([...list,data])
        setData({
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        })
    }

    const handleChange = (e) => {
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleDelete=(i)=>{
        list.splice(i,1)
        setList([...list])
    }
    return (
        <div className='container w-50 mt-5'>
            <h3 className='my-5'>Create Student</h3>
            <div className='row'>
                <div className='col-6'>
                    <label class="form-label">First Name</label>
                    <input type="text" class="form-control" name='firstName' value={data.firstName} onChange={(e) => handleChange(e)} />
                </div>
                <div className='col-6'>
                    <label class="form-label">Last Name</label>
                    <input type="text" class="form-control" name='lastName' value={data.lastName} onChange={(e) => handleChange(e)} />
                </div>
                <div className='col-6'>
                    <label class="form-label">Email Name</label>
                    <input type="email" class="form-control" name='email' value={data.email} onChange={(e) => handleChange(e)} />
                </div>
                <div className='col-6'>
                    <label class="form-label">Password</label>
                    <input type="password" class="form-control" name='password' value={data.password} onChange={(e) => handleChange(e)} />
                </div>
            </div>
            <div className='mt-5'>
                <button className='btn btn-sm btn-outline-success' onClick={handleSubmit}>Submit</button>
            </div>

            <div className='container'>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.map((item,i)=>{
                                return <tr>
                                <th scope="row">{i+1}</th>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.email}</td>
                                <td>
                                    <button className='btn btn-sm btn-outline-danger rounded-pill' onClick={()=>handleDelete(i)}>x</button>
                                </td>
                            </tr>
                            })
                        }
                        
                        
                    </tbody>
                </table>
            </div>
            <Toaster />
        </div>
    )
}

export default Form