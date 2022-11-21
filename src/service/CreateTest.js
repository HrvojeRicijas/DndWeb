import React,{useState} from 'react';
import Axios from 'axios'

function CreateTest() {

const [value,setValue] = useState("");

const submitPost = () => {
Axios.post('http://localhost:3002/api/users/create', {value: value})
}
    return (
        <div>
            <div>
                
                <label>Value: </label>
                <input type="text" onChange={(e)=> {
                    setValue(e.target.value)
                    console.log(value)
                }}/>
                <button onClick={submitPost}>Create a Test value</button>
            </div>
        </div>
    )}

export default CreateTest