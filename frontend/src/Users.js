import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Items from './Items'

function Users(){

    const[users,setUser]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:8000/user/get").then(res=>setUser(res.data))
    
    })
    return(
        <div className='groupcard'>
            {users.map(e=> <Items e={e}/>)}
        </div>
    )
}
export default Users