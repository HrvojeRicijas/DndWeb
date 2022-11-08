import React, { useState } from "react";
import HomeView from './views/HomeView';
import "./css/app.css";
import CharacterView from "./views/CharacterView";
import CampaignView from "./views/CampaignsView";
import CreateView from "./views/CreateView";
import CharacterPageView from "./views/CharacterPageView";
import CompendiumView from './views/CompendiumView';
import { Route } from 'react-router-dom';
import NavBar from './Components/NavBar';



function App() {

  return (
    <div className="background">
    <Route path="/"><NavBar /></Route>
    <Route path="/Home"><HomeView/></Route>
    <Route path="/Campaigns"><CampaignView/></Route>
    <Route path="/Characters"><CharacterView/></Route>
    <Route path="/Compendium"><CompendiumView/></Route>
    <Route path="/Create"><CreateView/></Route>
    <Route path="/CharacterPage/:id"><CharacterPageView/></Route>
</div>
  );
}

export default App;

/*
<Basiccardv2 logo="Nix.jpeg" name="Meneld Starforge" auth="Mark" class="Fighter" />
*/
