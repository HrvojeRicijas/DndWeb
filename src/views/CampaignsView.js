import React, { useState, useEffect } from "react";
import BasicCard from "../Components/BasicCard";
import Grid from "@mui/material/Grid";
import ButtonBase from "@mui/material/ButtonBase";
import Axios from "axios";
import BasicCardv2 from "../Components/BasicCardv2";


function CampaignsView() {
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
      sx={{ maxWidth: "100vw", paddingLeft: "2px" }}
    >
      {campaignList.map((data) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={data.campaignId}>
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

export default CampaignsView;
