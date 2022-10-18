import * as React from "react";
import Card from "@mui/joy/Card";
import ButtonBase from "@mui/material/ButtonBase";
import CardCover from "@mui/joy/CardCover";
import Typography from "@mui/joy/Typography";
import CardContent from "@mui/joy/CardContent";
import Grid from "@mui/material/Grid";

function BasicCard(props) {
  return (
    <ButtonBase sx={{ mx: 2, my: 2 }}>
      <Card raised="ture" sx={{ width: 300, height: 350 }}>
        <CardCover>
          <img
            src={props.logo}
            srcSet={props.logo}
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
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12}>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: 30,
                  textTransform: "capitalize",
                  border: 1,
                  borderRadius: "10px",
                  borderColor: "grey.500",
                }}
                textColor="#fff"
                mb={1}
              >
                {props.name}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                flexDirection="row"
                textColor="#f2f2f2"
                sx={{
                  textTransform: "capitalize",
                  fontWeight: "regular",
                  fontSize: 20,
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
                flexDirection="row"
                textColor="#f2f2f2"
                sx={{
                  textTransform: "capitalize",
                  fontWeight: "regular",
                  fontSize: 20,
                  border: 1,
                  borderRadius: "10px",
                }}
              >
                {props.class}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                flexDirection="row"
                textColor="red"
                sx={{
                  textTransform: "capitalize",
                  fontWeight: "light",
                  fontSize: 15,
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
    </ButtonBase>
  );
}

export default BasicCard;