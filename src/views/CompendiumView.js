import GetUsers from '../Components/GetUsers';
import GetCampaigns from '../Components/GetCampaigns';
import GetCharacters from '../Components/GetCharacters';
import '../css/app.css'

function CompendiumView(props) {
    
    return (
            <div className="show">
                <GetUsers/>
                <GetCampaigns/>
                <GetCharacters/>
            </div>
    );
}

export default CompendiumView;