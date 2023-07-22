import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function StudentList() {
    const [student,setStudent]=useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        fetchStudentList()
    },[])

   const fetchStudentList =async()=>{
        const res =await axios.get('https://64bb5c2a5e0670a501d6f469.mockapi.io/student')
        if(res.status===200){

           setStudent(res.data)
        }
   }

   const viewStudent=(id)=>{
        console.log(id)
        navigate(`/student/${id}`)
   }

   const handleDelete =async(id)=>{
    const res =await axios.delete(`https://64bb5c2a5e0670a501d6f469.mockapi.io/student/${id}`)
    if(res.status===200){
       toast.success("Deleted Successfully")
       fetchStudentList()
    }
   }

    return (
        <div className='container'>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Image</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        student.map((list,i)=>{
                            return<tr>
                            <th scope="row">{i+1}</th>
                            <th scope="row">
                                <img src={list.image} width={"70px"} height={"70px"}/>
                            </th>
                            <td>{list.firstName}</td>
                            <td>{list.lastName}</td>
                            <td>{list.email}</td>
                            <td>
                                <button className='btn btn-sm btn-outline-primary' onClick={()=>viewStudent(list.id)}>View</button>
                                <button className='btn btn-sm btn-outline-warning'>Edit</button>
                                <button className='btn btn-sm btn-outline-danger' onClick={()=>handleDelete(list.id)}>Delete</button>
                            </td>
                        </tr>
                        })
                    }
                    
                   </tbody>
            </table>
            <Toaster/>
        </div>
    )
}

export default StudentList