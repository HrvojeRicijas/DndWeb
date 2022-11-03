import React, { useState } from "react";
import BasicCard from "../Components/BasicCard";
import BasicList from "../Components/BasicList";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

function TestRender(props) {
  const [button, setButton] = useState(1);
  const [view, setView] = useState(
    <BasicList name="nix" race="Changeling" class="Warlock" auth="Mark" />
  );
  function viewHandler() {
    if (button === 0) {
      console.log("button je bio 0");
      setButton(1);
      setView(
        <BasicList name="nix" race="Changeling" class="Warlock" auth="Mark" />
      );
    } else if (button === 1) {
      console.log("button je bio 1");
      setButton(0);
      setView(
        <div>
          <BasicCard
            name="nix"
            race="Changeling"
            class="Warlock"
            auth="Mark"
            logo="Nix.jpeg"
          />
          <BasicCard
            name="nix"
            race="Changeling"
            class="Warlock"
            auth="Mark"
            logo="Nix.jpeg"
          />
          <BasicCard
            name="nix"
            race="Changeling"
            class="Warlock"
            auth="Mark"
            logo="Nix.jpeg"
          />
          <BasicCard
            name="nix"
            race="Changeling"
            class="Warlock"
            auth="Mark"
            logo="Nix.jpeg"
          />
          <BasicCard
            name="nix"
            race="Changeling"
            class="Warlock"
            auth="Mark"
            logo="Nix.jpeg"
          />
          <BasicCard
            name="nix"
            race="Changeling"
            class="Warlock"
            auth="Mark"
            logo="Nix.jpeg"
          />
          <BasicCard
            name="nix"
            race="Changeling"
            class="Warlock"
            auth="Mark"
            logo="Nix.jpeg"
          />
          <BasicCard
            name="nix"
            race="Changeling"
            class="Warlock"
            auth="Mark"
            logo="Nix.jpeg"
          />
          <BasicCard
            name="nix"
            race="Changeling"
            class="Warlock"
            auth="Mark"
            logo="Nix.jpeg"
          />
          <BasicCard
            name="nix"
            race="Changeling"
            class="Warlock"
            auth="Mark"
            logo="Nix.jpeg"
          />
        </div>
      );
    }
    console.log({ button });
  }

  return (
    <div>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={10}>
          {view}
        </Grid>
        <Grid item xs={2}>
          <Button
            sx={{ marginRight: 3, marginTop: 1 }}
            variant="contained"
            onClick={viewHandler}
          >
            Click me
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default TestRender;
