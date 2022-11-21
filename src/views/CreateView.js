import CreateCharacter from "../service/CreateCharacter";
import CreateUser from "../service/CreateUser";
import CreateCampaign from '../service/CreateCampaign';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../css/app.css'

const CreateView = () => {
    return (
        <Carousel showThumbs={false} showIndicators={false} showStatus={false} dynamicHeight={false} infiniteLoop={true}>
            <CreateCharacter />
            <CreateCampaign />
        </Carousel>
    )
}

export default CreateView;