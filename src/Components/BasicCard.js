import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import Typography from "@mui/joy/Typography";
import CardContent from "@mui/joy/CardContent";
import Grid from "@mui/material/Grid";
import "../css/app.css";

function BasicCard(props) {

  let logoDef = require(`../../public/Photos/${props.logo}`);
  return (
    <Card sx={{ width: "100%", paddingTop: "75%", overflow: "hidden", border: 4, borderRadius: "15px", borderColor: "black" }} className="card">
      <CardCover >
          <img className = "basicCard-img"
            src={logoDef}
            loading="lazy"
            alt="Descriptive Portrait"
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
                fontSize: "1.7vw",
                textTransform: "capitalize",
                border: 4,
                borderRadius: "15px",
                borderColor: "#8a0101",
                backgroundColor: "rgb(35, 35, 46, 0.8)"
              }}
              textColor="#fff"
              mb={1}
            >
              {(props.name.length<25) ? props.name : props.name.slice(0, 15).concat('...')}
            </Typography>
          </Grid>
          {typeof props.race !== 'undefined' ?
          <Grid item xs={6}>
            <Typography
              noWrap
              flexDirection="row"
              textColor="#f2f2f2"
              sx={{
                textTransform: "capitalize",
                fontWeight: "regular",
                fontSize: "1vw",
                border: 1,
                borderRadius: "10px",
                borderColor: "#ad0202",
                backgroundColor: "rgb(35, 35, 46, 0.8)"
              }}
            >
              { (props.race.length<15) ? props.race : props.race.slice(0, 15).trim().concat('...')}
            </Typography>
            </Grid> : ""}
            {typeof props.class !== 'undefined' ? 
          <Grid item xs={6}>
            <Typography
              noWrap
              flexDirection="row"
              textColor="#f2f2f2"
              sx={{
                textTransform: "capitalize",
                fontWeight: "regular",
                fontSize: "1vw",
                border: 1,
                borderRadius: "10px",
                borderColor: "#ad0202",
                backgroundColor: "rgb(35, 35, 46, 0.8)"
              }}
            >
              { (props.class.length<15) ? props.class : props.class}
            </Typography>
          </Grid> : ""}
          <Grid item xs={12}>
            <Typography
              noWrap
              flexDirection="row"
              textColor="#f2f2f2"
              sx={{
                textTransform: "capitalize",
                fontWeight: "light",
                fontSize: "1vw",
                fontStyle: "italic",
                border: 1,
                borderRadius: "7px",
                borderColor: "rgb(253,49,49)",
                backgroundColor: "rgb(35, 35, 46, 0.8)"
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