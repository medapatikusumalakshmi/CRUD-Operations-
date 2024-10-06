import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';

const GetUsers = () => {
    let[api,setApi]=useState([]);
    let[thead,setThead]=useState([]);
    let navigate=useNavigate();
    useEffect(()=>{
     let url=   axios.get("http://localhost:8080/users")
     url.then(res=>{
            setApi(res.data)
            setThead(Object.keys(res.data[0]).slice(0,4))
        }).catch(()=>{
            console.log("api is not working properly");
        })
    },[api])

    function deletes(id){
        axios.delete("http://localhost:8080/users/"+id).then(()=>{
            navigate("/")
        })
    }
   
   
    
  return (
    <>
      <div style={{position:"relative",height:"100vh",width:"100%"}} id='get'>
      <div style={{position:"absolute",left:"32%",top:"22%"}}>
        
      <table border={1} style={{backgroundColor:"#25bda3"}}>
        <caption style={{marginBottom:"10px"}}>
            <strong style={{fontSize:"2rem",color:"white"}}>CRUD Operations</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={()=>navigate("/add")} style={{width:"100px",height:"35px",backgroundColor:"white",color:"black"}}>Add +</button>
        </caption>
        <thead style={{fontSize:"1.2rem",height:"50px",backgroundColor:"#25bda3"}}>
            <tr>
            {thead.map((x,ind)=><th key={ind}>{x}</th>)}
            <th>Operations</th>
            </tr>
        </thead>
        <tbody style={{backgroundColor:"#25bda3",fontWeight:"bold"}}>
        
                {api.map(x=>
                    <tr key={x.id}>
                        <td>{x.id}</td>
                        <td>{x.name}</td>
                        <td>{x.username}</td>
                        <td>{x.email}</td>
                        <td>
                            <Link to={`/edit/${x.id}`}><button>Edit</button></Link>
                            <button onClick={()=>{deletes(x.id)}}>Delete</button>
                        </td>
                    </tr>
                )}
        </tbody>
      </table>
      </div>
      </div>
    </>
  )
}

export default GetUsers