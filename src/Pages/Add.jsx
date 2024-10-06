import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default  function Add(){

    let[values,setvalues]=useState({
        name:"",
        username:"",
        email:""
    })
    let change=(e)=>{
     setvalues({...values,[e.target.name]:[e.target.value]})
    }
    let navigate=useNavigate();
    function add(e){
        e.preventDefault()
        axios.post("http://localhost:3000/users",values).then(x=>
         navigate("/")
        )
    }

 return(
    <>
    <h1>Add a new user</h1>
    <br />

    <input type="text" placeholder="enter your name" name="name" value={values.name}  onChange={change}/> <br /> <br />
    <input type="email" placeholder="enter your email"  name="email" value={values.email} onChange={change} /> <br /> <br />
    <input type="text" placeholder="enter your username"  name="username" value={values.username} onChange={change} /> <br /> <br />
    <button onClick={add}> Add user</button>
    </>
 )
}



//preventDefault will not reload page