import Axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TopNavbar from "../Components/TopNavbar";

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
    <div>
      <TopNavbar />
      <h1>{characterInfo.NAME}</h1>
    </div>
  );
};

export default CharacterPageView;
