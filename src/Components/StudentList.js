import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

function StudentList() {
    const [student,setStudent]=useState([])
    const navigate = useNavigate()
    const [modal,setModal]=useState(false)
    const[studentEdit,setStudentEdit]=useState({})

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

   const handleEdit =(item)=>{
    setStudentEdit(item)
        setModal(!modal)
   }

   const handleChange = (e) => {
    setStudentEdit((prev) => ({ ...prev, [e.target.name]: e.target.value }))
}

const handleUpdate =async()=>{
    const res =await axios.put(`https://64bb5c2a5e0670a501d6f469.mockapi.io/student/${studentEdit.id}`,studentEdit)
    if(res.status===200){
        toast.success("Updated successfully")
        setModal(!modal)
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
                                <button className='btn btn-sm btn-outline-warning' onClick={()=>handleEdit(list)}>Edit</button>
                                <button className='btn btn-sm btn-outline-danger' onClick={()=>handleDelete(list.id)}>Delete</button>
                            </td>
                        </tr>
                        })
                    }
                    
                   </tbody>
            </table>
            <Toaster/>
            <Modal isOpen={modal} toggle={()=>setModal(!modal)} centered size='lg'>
                <ModalHeader toggle={()=>setModal(!modal)}>Edit Student</ModalHeader>
                <ModalBody>
                    <div className='container'>
                    <div className='row'>
                <div className='col-6'>
                    <label class="form-label">First Name</label>
                    <input type="text" class="form-control" name='firstName' value={studentEdit.firstName} onChange={(e) => handleChange(e)} />
                </div>
                <div className='col-6'>
                    <label class="form-label">Last Name</label>
                    <input type="text" class="form-control" name='lastName' value={studentEdit.lastName} onChange={(e) => handleChange(e)} />
                </div>
                <div className='col-6'>
                    <label class="form-label">Email Name</label>
                    <input type="email" class="form-control" name='email' value={studentEdit.email} onChange={(e) => handleChange(e)} />
                </div>
                <div className='col-6'>
                    <label class="form-label">Password</label>
                    <input type="password" class="form-control" name='password' value={studentEdit.password} onChange={(e) => handleChange(e)} />
                </div>
            </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button className='btn btn-sm btn-outline-danger mx-2' onClick={()=>setModal(!modal)}>Cancel</button>
                    <button className='btn btn-sm btn-outline-success mx-2' onClick={()=>handleUpdate()}>Update</button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default StudentList