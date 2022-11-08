import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import Typography from "@mui/joy/Typography";
import CardContent from "@mui/joy/CardContent";
import Grid from "@mui/material/Grid";
import "../css/app.css";
import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';

function BasicCard(props) {
  let width = window.innerWidth;
  const [ratio, setRatio] = useState(width / 1920);

  const theme = createTheme ({
    palette: {
      border: '#4a148c',
      mainTetx: '#9c27b0'
    },
  })

  useEffect(() => {
    function handleWindowResize() {
      width = window.innerWidth;
      setRatio(width / 1920);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  let logoDef = require(`../../public/Photos/${props.logo}`);
  return (
    <Card raised="ture" sx={{ width: "100%", paddingTop: "75%", overflow: "hidden", border: 4, borderRadius: "15px", borderColor: "rgb(128, 72, 156)" }}>
      <CardCover >
          <img className = "basicCard-img"
            src={logoDef}
            srcSet={logoDef}
            loading="lazy"
            alt="Character Portrait"
          />
      </CardCover>
      <CardCover
        sx={{
          background: `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0,0,0,0) 250px)`,
        }}
      />
      <CardContent sx={{ justifyContent: "flex-end" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
          <Grid item xs={12}>
            <Typography
              noWrap
              sx={{
                fontWeight: "bold",
                fontSize: 30 * ratio,
                textTransform: "capitalize",
                border: 4,
                borderRadius: "15px",
                borderColor: "rgb(128, 72, 156)",
              }}
              textColor="#fff"
              mb={1}
            >
              {props.name}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography
              noWrap
              flexDirection="row"
              textColor="#f2f2f2"
              sx={{
                textTransform: "capitalize",
                fontWeight: "regular",
                fontSize: 18 * ratio,
                border: 1,
                borderRadius: "10px",
                borderColor: "grey.500",
              }}
            >
              {props.race}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography
              noWrap
              flexDirection="row"
              textColor="#f2f2f2"
              sx={{
                textTransform: "capitalize",
                fontWeight: "regular",
                fontSize: 18 * ratio,
                border: 1,
                borderRadius: "10px",
              }}
            >
              {props.class}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              noWrap
              flexDirection="row"
              textColor="red"
              sx={{
                textTransform: "capitalize",
                fontWeight: "light",
                fontSize: 18 * ratio,
                fontStyle: "italic",
                border: 1,
                borderRadius: "7px",
              }}
            >
              Author: {props.auth}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default BasicCard;


/*
const theme = createTheme ({
    palette: {
      border: '#4a148c',
      mainTetx: '#9c27b0'
    },
  })
*/