import "../css/app.css";
import { AppBar, Typography } from "@mui/material/";
import ToolBar from "@mui/material/Toolbar";
import { NavLink } from "react-router-dom";


const NavBar = () => {
  return (
      <div>
        <AppBar>
          <ToolBar>
            <Typography fontSize={20}>Dragon's Inn</Typography>

            <NavLink to="/" className="navlink">
              <button>Home</button>
            </NavLink>

            <NavLink to="/Campaigns" className="navlink">
              <button>Campaigns</button>
            </NavLink>

            <NavLink to="/Characters" className="navlink">
              <button>Characters</button>
            </NavLink>

            <NavLink to="/Compendium" className="navlink">
              <button>Compendium</button>
            </NavLink>

            <NavLink to="/Create" className="navlink">
              <button>Create</button>
            </NavLink>
          </ToolBar>
        </AppBar>
      </div>
  );
};

export default NavBar;
