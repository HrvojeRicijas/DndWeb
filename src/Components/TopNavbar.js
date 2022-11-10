import "../css/top-nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faScroll, faPlus, faHatWizard, faBook } from "@fortawesome/free-solid-svg-icons";

const TopNavbar = () => {
  return (
    <div className="container">
      <ul className="nav-content">
        <li className="nav-logo">
          <a href="/" className="nav-home">Dragon's Inn</a>
        </li>
        <li className="nav-button">
          <a className="nav-items" href="/Campaigns">
            <FontAwesomeIcon icon={faScroll} className="nav-icon" />
            <div className="nav-text">Campaigns</div>
          </a>
        </li>
        <li className="nav-button">
          <a className="nav-items" href="/Characters">
            <FontAwesomeIcon icon={faHatWizard} className="nav-icon" />
            <div className="nav-text">Characters</div>
          </a>
        </li>
        <li className="nav-button">
          <a className="nav-items" href="/Compendium">
            <FontAwesomeIcon icon={faBook} className="nav-icon" />
            <div className="nav-text">Compendium</div>
          </a>
        </li>
        <li className="nav-button">
          <a className="nav-items" href="/Create">
            <FontAwesomeIcon icon={faPlus} className="nav-icon" />
            <div className="nav-text">Create</div>
          </a>
        </li>
        <li className="nav-button">
          <a className="nav-items" href="/Player">
            <FontAwesomeIcon icon={faUser} className="nav-icon" />
            <div className="nav-text">Player</div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TopNavbar;
