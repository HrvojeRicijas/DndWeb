import BasicCard from "../Components/BasicCard";
import testjson from "../tetsdata/campaigns.json";
import Grid from "@mui/material/Grid";

import logo1 from "../Photos/Nix.jpeg";

function Landing() {
  return (
    <Grid container columnSpacing={1} rowSpacing={1} sx={{mx: 1, my: 1}} flexDirection='row'>
      {testjson.map((test, key) => (
        <Grid item xs={3} key={key}>
          <BasicCard name={test.name} auth={test.DM} logo={logo1} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Landing 
