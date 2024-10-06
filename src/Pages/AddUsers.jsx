//onblur means on that element that does not work,it will work whereever we can click expect that element
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddUsers = () => {
    let navigate=useNavigate();
    let[values,setValues]=useState({"username":"","email":""})
    let change=(e)=>{
         setValues({...values,[e.target.name]:[e.target.value]})
    }
    function adder(e){
        e.preventDefault();
        axios.post("http://localhost:8080/users",values).then(()=>
        {
            navigate("/")
        })
    }
    
  return (
    <div style={{position:"relative",height:"100vh",width:"100%"}} id='get1'>
        <div style={{border:"2px solid white",width:"25%", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",position:"absolute",left:"38%",top:"30%",height:"35%",textAlign:"center",borderRadius:"8px",backgroundColor:"white"}}>
        <h1 style={{marginTop:"20px"}}>Add a New User</h1>
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
            <button onClick={adder} style={{width:"35%",height:"25px",color:"white",backgroundColor:"blue",border:"none",borderRadius:"10px"}}>Add User</button>
        </form>
    </div>
    </div>
  )
}

export default AddUsers
