import HomePage from "./Pages/HomePage";
import "./css/app.css";
import AllCharactersPage from "./Pages/AllCharactersPage";
import AllCampaignsPage from "./Pages/AllCampaignsPage";
import CreatePage from "./Pages/CreatePage";
import CharacterPage from "./Pages/CharacterPage";
import CompendiumPage from "./Pages/CompendiumPage";
import { Route } from "react-router-dom";
import { Scrollbars } from 'react-custom-scrollbars';

function App() {
  return (
    <Scrollbars style={{ width: "100vw", height: "100vh" }} className="background">
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
    </Scrollbars>
  );
}

export default App;
