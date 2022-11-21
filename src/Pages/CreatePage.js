import TopNavbar from "../Components/TopNavbar";
import CreateView from "../views/CreateView";
import "../css/app.css";

const CreatePage = () => {
  return (
    <div>
      <TopNavbar />
      <span className="create-page-title">Swipe left or right and start creating your character, or your campaign!</span>
      <CreateView />
    </div>
  );
};

export default CreatePage;
