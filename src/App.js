import BasicCard from "./Components/BasicCard";
import BasicList from "./Components/BasicList";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Card";
import logo1 from "./Photos/637880558264506587.jpeg";

function App() {
  let render = 1;
  let page = "";

  function ViewMod() {
    console.log("Bok");
    if (render === 1) render = 0;
    else if (render === 0) render = 1;
    console.log("Borj je:", render);
  }

  if (render === 0) {
    page = (
      <BasicList name="nix" race="Changeling" class="Warlock" auth="Mark" />
    );
  } else if (render === 1) {
    page = (
      <div>
        <BasicCard
          name="nix"
          race="Changeling"
          class="Warlock"
          auth="Mark"
          logo={logo1}
        />
        <BasicCard
          name="nix"
          race="Changeling"
          class="Warlock"
          auth="Mark"
          logo={logo1}
        />
        <BasicCard
          name="nix"
          race="Changeling"
          class="Warlock"
          auth="Mark"
          logo={logo1}
        />
        <BasicCard
          name="nix"
          race="Changeling"
          class="Warlock"
          auth="Mark"
          logo={logo1}
        />
        <BasicCard
          name="nix"
          race="Changeling"
          class="Warlock"
          auth="Mark"
          logo={logo1}
        />
        <BasicCard
          name="nix"
          race="Changeling"
          class="Warlock"
          auth="Mark"
          logo={logo1}
        />
        <BasicCard
          name="nix"
          race="Changeling"
          class="Warlock"
          auth="Mark"
          logo={logo1}
        />
        <BasicCard
          name="nix"
          race="Changeling"
          class="Warlock"
          auth="Mark"
          logo={logo1}
        />
        <BasicCard
          name="nix"
          race="Changeling"
          class="Warlock"
          auth="Mark"
          logo={logo1}
        />
        <BasicCard
          name="nix"
          race="Changeling"
          class="Warlock"
          auth="Mark"
          logo={logo1}
        />
      </div>
    );
  }

  return (
    <Paper>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={10}>
          {page}
        </Grid>
        <Grid item xs={2}>
          <Button sx={{ marginRight: 3, marginTop: 1 }} variant="contained" onClick={ViewMod}>
            Click me
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default App;
