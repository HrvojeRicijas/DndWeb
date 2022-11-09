import Axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../Components/NavBar";

const CharacterPageView = (props) => {
  const { id } = useParams()
  const [characterInfo, setCharacterInfo] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:3002/api/characters/getById/${id}`).then((data) => {
      
      setCharacterInfo(data.data[0]);
      console.log(data.data[0])
    });
  }, [props.id]);

  return (
    <div>
      <NavBar />
      <div className="navbar-padding"></div>
        <h1>{characterInfo.NAME}</h1>
    </div>
  );
};

export default CharacterPageView;
