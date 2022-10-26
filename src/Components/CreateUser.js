import React,{useState} from 'react';
import Axios from 'axios'
import '../css/app.css'
function CreateUser() {

const [username,setUsername] = useState("");

const submitPost = () => {
Axios.post('http://localhost:3002/api/users/create', {username: username})
}

    return (
        <div>
            <div className="boxed">
                <span className='formTitle'>Create a user:</span>
                <div>
                    <label>Username: </label>
                    <input type="text" onChange={(e)=> {
                        setUsername(e.target.value)
                    }}/>
                </div>
                <button onClick={submitPost}>Create a User</button>
            </div>
        </div>
    )}

export default CreateUser