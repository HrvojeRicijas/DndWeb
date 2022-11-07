import "../css/app.css";
import { AppBar, Typography, Button } from "@mui/material/";
import ToolBar from "@mui/material/Toolbar";
import { Route, NavLink, HashRouter, Routes } from "react-router-dom";
import CharacterView from "../views/CharacterView";
import Home from "../views/HomeView";
import TestView from "../views/CompendiumView";
import CampaignView from "../views/CampaignsView";
import CreateView from '../views/CreateView';

const NavBar = () => {
  return (
    <HashRouter>
      <div className = "background">
        <AppBar >
          <ToolBar>
            <Typography color="primary">Dragon's Inn</Typography>
            <Button color="primary" size="large" variant="contained" sx={{ ml: "3%" }}>
              <NavLink to="/" className = "navlink">Home</NavLink>
            </Button>
            <Button color="primary" size="large" variant="contained" sx={{ ml: "3%" }}>
              <NavLink to="/Campaigns" className = "navlink">Campaigns</NavLink>
            </Button>
            <Button color="primary" size="large" variant="contained" sx={{ ml: "3%" }}>
              <NavLink to="/Characters" className = "navlink">Characters</NavLink>
            </Button>
            <Button color="primary" size="large" variant="contained" sx={{ ml: "3%" }}>
              <NavLink to="/Compendium" className = "navlink">Compendium</NavLink>
            </Button>
            <Button color="primary" size="large" variant="contained" sx={{ ml: "3%" }}>
              <NavLink to="/Create" className = "navlink">Create</NavLink>
            </Button>
          </ToolBar>
        </AppBar>
        <div className = "navbarContent">
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="Characters" element={<CharacterView />} />
            <Route path="Compendium" element={<TestView/>} />
            <Route path="Campaigns" element={<CampaignView/>} />
            <Route path="Create" element={<CreateView/>} />          
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
};

export default NavBar;
