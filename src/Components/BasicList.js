import Card from "@mui/joy/Card";
import ButtonBase from "@mui/material/ButtonBase";
import CardCover from "@mui/joy/CardCover";
import Typography from "@mui/joy/Typography";
import CardContent from "@mui/joy/CardContent";
import Grid from "@mui/material/Grid";


function BasicList(props) {
  return (
    <ButtonBase sx={{ mx: 2, my: 0.5 }}>
      <Card raised="ture" sx={{ width: 1200, height: 20 }}>
        <CardCover
          sx={{
            background: `radial-gradient(circle, rgba(100, 0, 100, 1), rgba(250, 0, 255, 1))`,
          }}
        />
        <CardContent sx={{ justifyContent: "flex-end" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={3}>
              <Typography
                sx={{
                    textTransform: "capitalize",
                    fontWeight: "light",
                    fontSize: 15,
                    border: 1,
                    borderRadius: "7px",
                    borderColor: "black"
                }}
                textColor="white"
                mb={1}
              >
                {props.name}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography
                textColor="white"
                sx={{
                    textTransform: "capitalize",
                    fontWeight: "light",
                    fontSize: 15,
                    border: 1,
                    borderRadius: "7px",
                    borderColor: "black"
                }}
              >
                {props.race}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography
                textColor="white"
                sx={{
                    textTransform: "capitalize",
                    fontSize: 15,
                    fontStyle: "italic",
                    border: 1,
                    borderRadius: "7px",
                    borderColor: "black"
                }}
              >
                {props.class}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography
                textColor="white"
                sx={{
                  textTransform: "capitalize",
                  fontWeight: "light",
                  fontSize: 15,
                  fontStyle: "italic",
                  border: 1,
                  borderRadius: "7px",
                  borderColor: "black"
                }}
              >
                {props.auth}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </ButtonBase>
  );
}

export default BasicList;
