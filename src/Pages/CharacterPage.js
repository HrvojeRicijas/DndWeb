import Axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TopNavbar from "../Components/TopNavbar";
import "../css/character-sheet.css";
import logo from "./DnD1.webp";

const CharacterPageView = (props) => {
  const { id } = useParams();
  const [characterInfo, setCharacterInfo] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:3002/api/characters/getById/${id}`).then(
      (data) => {
        setCharacterInfo(data.data[0]);
        console.log(data.data[0]);
      }
    );
  }, [props.id]);

  return (
    <div className="container">
      <TopNavbar />
      <div className="main">
        <img src={logo} className="img"/>
        <div className="basic-info-container">
          <li className="list-name">{characterInfo.NAME}</li>
          <div className="left-right">
            <li className="text-left-right margin-right">Race:</li>
            <li className="text-left-right margin-left">Class (Level):</li>
          </div>
          <div className="left-right">
            <li className="list-left-right margin-right">
              {characterInfo.race}
            </li>
            <li className="list-left-right margin-left">
              Warlock ({characterInfo.LEVEL})
            </li>
          </div>
          <div className="left-right">
            <li className="text-left-right margin-right">Author:</li>
            <li className="text-left-right margin-left">Campaign:</li>
          </div>
          <div className="left-right">
            <li className="list-left-right margin-right">
              Mark
            </li>
            <li className="list-left-right margin-left">
              Merc of the Calla
            </li>
          </div>
          <li>Description:</li>
          <li className="text-description">
            Default Val was born and raised in the slums of the poor and old city of Neverwinter!
            His mother never loved himand since he was middle of the pack in everything he did and was,
            she named him Default and gave him the middle name Val.
            His father was a drunk.
            I need this to extend some more so I can see if the box this description is in will flex down,
            or will the text spill over the border and look ugly!
            </li>
        </div>
      </div>
    </div>
  );
};

export default CharacterPageView;
