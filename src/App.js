import HomePage from "./Pages/HomePage";
import "./css/app.css";
import AllCharactersPage from "./Pages/AllCharactersPage";
import AllCampaignsPage from "./Pages/AllCampaignsPage";
import CreatePage from "./Pages/CreatePage";
import CharacterPage from "./Pages/CharacterPage";
import CompendiumPage from "./Pages/CompendiumPage";
import { Route } from "react-router-dom";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="scroll">
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/Campaigns">
        <AllCampaignsPage />
      </Route>
      <Route path="/Characters">
        <AllCharactersPage />
      </Route>
      <Route path="/Compendium">
        <CompendiumPage />
      </Route>
      <Route path="/Create">
        <CreatePage />
      </Route>
      <Route path="/CharacterPage/:id">
        <CharacterPage />
      </Route>
    </div>
  );
}

export default App;
