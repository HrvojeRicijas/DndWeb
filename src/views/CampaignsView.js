import React, { useState, useEffect } from "react";
import BasicCard from "../Components/BasicCard";
import Grid from "@mui/material/Grid";
import ButtonBase from "@mui/material/ButtonBase";
import Axios from "axios";
import { NavLink } from "react-router-dom";

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
      sx={{
        maxWidth: "100vw",
        paddingLeft: "10px",
        paddingRight: "10px",
      }}
    >
      {campaignList.map((data) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={data.campaignId}>
          <NavLink
            className="cardlink"
            to={`CampaignPage/${data.campaignId}`}
          >
            <ButtonBase sx={{ width: "100%" }}>
              <BasicCard
                logo="Nix.jpeg"
                name={data.camapignName}
                auth={data.creatorName}
              />
            </ButtonBase>
          </NavLink>
        </Grid>
      ))}
    </Grid>
  );
}

export default CampaignsView;
