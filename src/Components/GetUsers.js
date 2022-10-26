import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import '../css/app.css'

function GetUsers() {

const [userList,setUserList] = useState([]);

useEffect(()=>{
Axios.get("http://localhost:3002/api/users/get").then((data)=>{
    console.log(data)
    setUserList(data.data)
});
},[])


    return (
        <div>
            <div className="boxed">
                <h2>Users: </h2>
                {userList.map((val,key)=>{return (
                    <span className="user" key={key} >
                        <p>{val.id}, {val.username}</p>
                    </span>
                )})}
          </div>
        </div>
    )
}

export default GetUsers