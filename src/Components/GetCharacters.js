import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import '../css/app.css'

function GetCharacters() {

const [characterList,setCharacterList] = useState([]);

useEffect(()=>{
Axios.get("http://localhost:3002/api/characters/get").then((data)=>{
    console.log(data)
    setCharacterList(data.data)
    console.log(data.data[0])
});
},[])


    return (
        <div>
            <div className="boxed">
                <h2>Characters: </h2>
                {characterList.map((val,key)=>{return (
                    <span className="character" key={key} >
                        <p>
                            id: {val.characterId}: {val.characterName} <br/>
                            level {val.level} {val.race} {val.className} <br/>
                            description: {val.description} <br/> 
                            campaign: {val.campaignName},
                            player: {val.creatorName}
                            </p>
                    </span>
                )})}
          </div>
        </div>
    )
}

export default GetCharacters