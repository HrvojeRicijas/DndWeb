import TestRender from "../Components/TestRender";
import CreateUser from '../Components/CreateUser';
import CreateCampaign from '../Components/CreateCampaign';
import GetUsers from '../Components/GetUsers';
import GetCampaigns from '../Components/GetCampaigns';
import CreateCharacter from '../Components/CreateCharacter';
import GetCharacters from '../Components/GetCharacters';
import '../css/app.css'

function Landing(props) {
    
    return (
        <div>
            <TestRender/>
            <div className="create">
                <CreateUser/>
                <CreateCampaign/>
                <CreateCharacter/>
            </div>
            <div className="show">
                <GetUsers/>
                <GetCampaigns/>
                <GetCharacters/>
            </div>
        </div>
    );
}

export default Landing;