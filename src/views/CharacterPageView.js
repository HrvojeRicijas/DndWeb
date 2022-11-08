import Axios from "axios";
import { useEffect, useState } from "react";
import BasicCard from "../Components/BasicCard";

const CharacterPageView = (props) => {
  const [characterInfo, setCharacterInfo] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3002/api/characters/getById", {
      params: { id: props.id },
    }).then((data) => {
      console.log(data);
      setCharacterInfo([data.data]);
    });
  }, []);

  return (
    <div>
      <h1>{props.id}</h1>
    </div>
  );
};

export default CharacterPageView;
