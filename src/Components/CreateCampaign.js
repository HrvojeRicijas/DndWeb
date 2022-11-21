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
            <div className="create-container">
                <span className='formTitle'>Create a campaign:</span>
                <label>Name: </label>
                    <input type="text" className="create-input" onChange={(e)=> {
                        setName(e.target.value)
                    }}/>
                <label>Creator: (za sada je ovako glupavo da moras upisati broj)</label>
                    <input type="number" className="create-input" onChange={(e)=> {
                        setCreatorId(e.target.value)
                    }}/>
                <button onClick={submitPost} className="create-button">Create a Campaign</button>
            </div>
    )}

export default CreateUser