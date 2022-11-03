import CreateCharacter from "../Components/CreateCharacter";
import CreateUser from "../Components/CreateUser";
import CreateCampaign from '../Components/CreateCampaign'

const CreateView = () => {
    return (
        <div>
            <CreateCharacter />
            <CreateUser />
            <CreateCampaign />
        </div>
    )
}

export default CreateView;