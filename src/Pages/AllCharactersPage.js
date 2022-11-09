import NavBar from "../Components/NavBar";
import CharactersView from "../views/CharactersView";
import "../css/app.css";

const AllCharactersPage = () => {
  return (
    <div>
      <NavBar />
      <div className="navbar-padding"></div>
        <CharactersView />
    </div>
  );
};

export default AllCharactersPage;
