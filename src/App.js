import "./App.css";
import { Grid } from "@mui/material";
import { useState } from "react";
import BasicHookUseState from "./hooks/useState/example-one";
import BasicHookUseState2 from "./hooks/useState/example-two";
import BasicHookUseEffect from "./hooks/useEffect/example-one";
import BasicHookUseEffect2 from "./hooks/useEffect/example-two";

function App() {
  const [useState1, setUseState1] = useState(false);
  const [useState2, setUseState2] = useState(false);
  const [useEffect1, setUseEffect1] = useState(false);
  const [useEffect2, setUseEffect2] = useState(false);

  return (
    <Grid container spacing={5}>
      <Grid item xs={6}>
        <button onClick={() => setUseState1(!useState1)}>
          Example useState 1
        </button>
        <br />
        <div style={{ visibility: useState1 ? "unset" : "hidden" }}>
          <BasicHookUseState />
        </div>
      </Grid>
      <Grid item xs={6}>
        <button onClick={() => setUseState2(!useState2)}>
          Example useState 2
        </button>
        <br />
        <div style={{ visibility: useState2 ? "unset" : "hidden" }}>
          <BasicHookUseState2 />
        </div>
      </Grid>
      <Grid item xs={12}>
        <button onClick={() => setUseEffect1(!useEffect1)}>
          Example useEffect 1
        </button>
        <br />
        {useEffect1 && <BasicHookUseEffect />}
      </Grid>
      <Grid item xs={12}>
        <button onClick={() => setUseEffect2(!useEffect2)}>
          Example useEffect 2
        </button>
        <br />
        {useEffect2 && <BasicHookUseEffect2 />}
      </Grid>
    </Grid>
  );
}

export default App;
