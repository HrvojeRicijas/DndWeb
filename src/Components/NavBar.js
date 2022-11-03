import "../css/app.css";
import { AppBar, Typography, Button } from "@mui/material/";
import ToolBar from "@mui/material/Toolbar";
import { Route, NavLink, HashRouter, Routes } from "react-router-dom";
import CharacterView from "../views/CharacterView";
import Home from "../views/HomeView";
import TestView from "../views/TestView";
import CampaignView from "../views/CampaignsView";

const NavBar = () => {
  return (
    <HashRouter>
      <div>
        <AppBar position="static">
          <ToolBar>
            <Typography>Dragon's Inn</Typography>
            <Button color="error" size="large" variant="text" sx={{ ml: "3%" }}>
              <NavLink to="/">Home</NavLink>
            </Button>
            <Button color="error" size="large" variant="text" sx={{ ml: "3%" }}>
              <NavLink to="/Campaigns">Campaigns</NavLink>
            </Button>
            <Button color="error" size="large" variant="text" sx={{ ml: "3%" }}>
              <NavLink to="/Characters">Characters</NavLink>
            </Button>
            <Button color="error" size="large" variant="text" sx={{ ml: "3%" }}>
              <NavLink to="/Compendium">Compendium</NavLink>
            </Button>
          </ToolBar>
        </AppBar>
        <div>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="Characters" element={<CharacterView/>} />
            <Route path="Compendium" element={<TestView/>} />
            <Route path="Campaigns" element={<CampaignView/>} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
};

export default NavBar;
