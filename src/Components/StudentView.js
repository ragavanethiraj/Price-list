import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function StudentView() {
    const params = useParams()
    console.log(params.id)

    const [ student,setStudent]=useState({})

    useEffect(()=>{
        fetchStudent()
    },[])

   const fetchStudent =async()=>{
        const res =await axios.get(`https://64bb5c2a5e0670a501d6f469.mockapi.io/student/${params.id}`)
        if(res.status===200){
           setStudent(res.data)
        }
   }

   console.log(student)
    return (
        <div className='container w-50'>
            <div class="card" style={{width: "18rem;"}}>
                <img src={student.image} class="card-img-top" alt="..." width={"200px"} height={"200px"}/>
                <div class="card-body">
                    <h5 class="card-title">{student.firstName}{student.lastName}</h5>
                    <p>{student.email}</p>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

export default StudentView