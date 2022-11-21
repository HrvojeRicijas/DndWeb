import React, { useState, useEffect } from "react";
import BasicCard from "../Components/BasicCard";
import Grid from "@mui/material/Grid";
import ButtonBase from "@mui/material/ButtonBase";
import Axios from "axios";
import { NavLink } from "react-router-dom";

function CharactersView() {
  const [characterList, setCharacterList] = useState([]);

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
      sx={{
        maxWidth: "100vw",
        padding: "10px"
      }}
    >
      {characterList.map((data) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={data.characterId}>
          <NavLink
            className="cardlink"
            to={`CharacterPage/${data.characterId}`}
          >
            <ButtonBase sx={{ width: "100%" }}>
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
      ))}
    </Grid>
  );
}

export default CharactersView;
