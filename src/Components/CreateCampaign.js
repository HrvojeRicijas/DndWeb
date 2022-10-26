import React,{useState} from 'react';
import Axios from 'axios'
import '../css/app.css'
function CreateUser() {

    const [name, setName] = useState("");
    const [creatorId, setCreatorId] = useState("");

const submitPost = () => {
Axios.post('http://localhost:3002/api/campaigns/create', {name: name, creatorId: creatorId})
}

    return (
        <div>
            <div className="boxed">
                <span className='formTitle'>Create a campaign:</span>
                <div>
                <label>Name: </label>
                    <input type="text" onChange={(e)=> {
                        setName(e.target.value)
                    }}/>
                </div>
                <div>
                <label>Creator: (za sada je ovako glupavo da moras upisati broj)</label>
                    <input type="number" onChange={(e)=> {
                        setCreatorId(e.target.value)
                    }}/>
                </div>
                <button onClick={submitPost}>Create a Campaign</button>
            </div>
        </div>
    )}

export default CreateUser