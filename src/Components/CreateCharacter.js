import React,{useState} from 'react';
import Axios from 'axios'
import '../css/app.css'
import ClassesDropdown from './ClassesDropdown';

function CreateCharacter() {

    const [name, setName] = useState("");
    const [race, setRace] = useState("");
    const [classId, setClassId] = useState("");
    const [level, setLevel] = useState("");
    const [creatorId, setCreatorId] = useState("");
    const [campaignId, setCampaignId] = useState("");
    const [description, setDescription] = useState("");


const submitPost = () => {
Axios.post('http://localhost:3002/api/characters/create', {name:name, race:race, classId:classId, level:level, creatorId:creatorId, campaignId:campaignId, description:description})
}

    return (
        <div>
            <div className="boxed">
                <span className='formTitle'>Create a character:</span>
                <div>
                <label>Name: </label>
                    <input type="text" onChange={(e)=> {
                        setName(e.target.value)
                    }}/>
                </div>
                
                <div>
                <label>Race: </label>
                    <input type="text" onChange={(e)=> {
                        setRace(e.target.value)
                    }}/>
                </div>

                <div>
                <label>Class: </label>
                    <ClassesDropdown  onChange={(e)=> {
                        console.log(e.target.value)
                        setClassId(e.target.value)
                    }}/>
                </div>
                
                <div>
                <label>Level: </label>
                    <input type="number" onChange={(e)=> {
                        setLevel(e.target.value)
                    }}/>
                </div>

                <div>
                <label>Creator:</label>
                    <input type="number" onChange={(e)=> {
                        setCreatorId(e.target.value)
                    }}/>
                </div>

                <div>
                <label>Campaign: </label>
                    <input type="number" onChange={(e)=> {
                        setCampaignId(e.target.value)
                    }}/>
                </div>

                <div>
                <label>Description: </label>
                    <textarea  onChange={(e)=> {
                        setDescription(e.target.value)
                    }}/>
                </div>
                <button onClick={submitPost}>Create a Character</button>
            </div>
        </div>
    )}

export default CreateCharacter