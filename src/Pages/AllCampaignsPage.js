import NavBar from "../Components/NavBar";
import CampaignsView from "../views/CampaignsView";
import "../css/app.css";

const AllCampaignsPage = () => {
  return (
    <div>
      <NavBar />
      <div className="navbar-padding"></div>
        <CampaignsView />
    </div>
  );
};

export default AllCampaignsPage;
