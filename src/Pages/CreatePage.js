import NavBar from "../Components/NavBar";
import CreateView from "../views/CreateView";
import "../css/app.css";

const CreatePage = () => {
  return (
    <div>
      <NavBar />
      <div className="navbar-padding"></div>
        <CreateView />
    </div>
  );
};

export default CreatePage;
