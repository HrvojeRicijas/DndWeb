import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import '../css/app.css'

function GetCampaigns() {

const [campaignList,setCampaignList] = useState([]);

useEffect(()=>{
Axios.get("http://localhost:3002/api/campaigns/get").then((data)=>{
    setCampaignList(data.data)
});
},[])


    return (
        <div>
            <div className="boxed">
                <h2>Campaigns: </h2>
                {campaignList.map((val,key)=>{return (
                    <span className="campaign" key={key} >
                        <p>{val.campaignId}, {val.camapignName}, {val.username}</p>
                    </span>
                )})}
          </div>
        </div>
    )
}

export default GetCampaigns