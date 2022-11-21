import GetUsers from '../service/GetUsers';
import GetCampaigns from '../service/GetCampaigns';
import GetCharacters from '../service/GetCharacters';
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