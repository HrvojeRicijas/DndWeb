import React, { useState, useEffect } from "react";
import BasicCard from "../Components/BasicCard";
import Grid from "@mui/material/Grid";
import ButtonBase from "@mui/material/ButtonBase";
import Axios from "axios";

//import logo1 from "../Photos/Nix.jpeg";

function Landing() {
  const [campaignList, setCampaignList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3002/api/campaigns/get").then((data) => {
      console.log(data);
      setCampaignList(data.data);
    });
  }, []);

  return (
    <Grid
      container
      columnSpacing={1}
      rowSpacing={1}
      sx={{ mx: 1, my: 1, gridAutoRows: "100px" }}
    >
      {campaignList.map((data, key) => (
        <Grid item xs={3} key={key}>
          <ButtonBase sx={{ width: "100%" }}>
            <BasicCard
              logo="Nix.jpeg"
              name={data.camapignName}
              auth={data.creatorName}
            />
          </ButtonBase>
        </Grid>
      ))}
    </Grid>
  );
}

export default Landing;
