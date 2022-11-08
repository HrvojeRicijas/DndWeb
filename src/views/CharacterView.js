import React, { useState, useEffect } from "react";
import BasicCard from "../Components/BasicCard";
import Grid from "@mui/material/Grid";
import ButtonBase from "@mui/material/ButtonBase";
import Axios from "axios";
import { Route, NavLink, Routes } from "react-router-dom";
import CharacterPageView from "./CharacterPageView";

function CharactersView(props) {
  const [characterList, setCharacterList] = useState([]);

  function clickHandler (id) {
    props.onCharacterClick(id);
    console.log(id);
  }

  let view = (
    characterList.map((data) => (
      <Grid item xs={12} sm={6} md={4} lg={3} key={data.characterId}>
        <NavLink className="cardlink" to={`CharacterPage/${data.characterId}`} >
          <ButtonBase
            sx={{ width: "100%" }}
            onClick={() => clickHandler(data.characterId)}
          >
            <BasicCard
              logo="Nix.jpeg"
              name={data.characterName}
              auth={data.creatorName}
              class={data.classId}
              race={data.race}
            />
          </ButtonBase>
        </NavLink>
      </Grid>
    ))
  );

  useEffect(() => {
    Axios.get("http://localhost:3002/api/characters/get").then((data) => {
      console.log(data);
      setCharacterList(data.data);
    });
  }, []);

  return (
    <Grid
      container
      columnSpacing={1}
      rowSpacing={1}
      sx={{ mx: 1, my: 1, gridAutoRows: "100px" }}
    >
      {view}
    </Grid>
  );
}

export default CharactersView;
