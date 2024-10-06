//onblur means on that element that does not work,it will work whereever we can click expect that element
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateUsers = () => {
    let navigate=useNavigate();
    let[values,setValues]=useState({"username":"","email":""})
    let change=(e)=>{
         setValues({...values,[e.target.name]:[e.target.value]})
    }
    let {id}=useParams();
    useEffect(()=>{
        axios.get("http://localhost:8080/users/"+id).then(res=>setValues(res.data)).catch(()=>{
            console.log("api is not working properly");
            
        })
    },[id])

    function update(e){
        e.preventDefault()
        axios.put("http://localhost:8080/users/"+id,values).then(()=>{
            navigate("/")
        })
    }
    
  return (
  <div style={{position:"relative",height:"100vh",width:"100%"}} id='get2'>
      <div style={{border:"2px solid white",width:"25%", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",position:"absolute",left:"38%",top:"30%",height:"35%",textAlign:"center",borderRadius:"8px",backgroundColor:"white"}}>
        <h1 style={{marginTop:"20px"}}>Editing our profile</h1>
        <form action="">
            <input type="text" placeholder='enter username'
             name='username' 
             value={values.username}
             onChange={change}
             style={{height:"30px",width:"60%",marginTop:"20px",paddingLeft:"10px"}}
             />
            <br /> <br />
            <input type="email" placeholder='enter email'
             name='email' 
             value={values.email}
             onChange={change}
             style={{height:"30px",width:"60%",marginTop:"10px",paddingLeft:"10px"}}
         />
            <br /> <br />
            <button onClick={update} style={{width:"35%",height:"25px",color:"white",backgroundColor:"blue",border:"none",borderRadius:"10px"}}>Update User</button>
        </form>
    </div>
  </div>
  )
}

export default UpdateUsers
