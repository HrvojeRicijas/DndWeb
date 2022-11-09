import NavBar from "../Components/NavBar";
import CompendiumView from "../views/CompendiumView";
import "../css/app.css";

const CompendiumPage = () => {
  return (
    <div>
      <NavBar />
      <div className="navbar-padding"></div>
        <CompendiumView />
    </div>
  );
};

export default CompendiumPage;
