import "./App.css";
import { Grid } from "@mui/material";
import { useState } from "react";
import BasicHookUseState from "./hooks/useState/example-1";
import BasicHookUseState2 from "./hooks/useState/example-2";
import BasicHookUseEffect from "./hooks/useEffect/example-1";
import BasicHookUseEffect2 from "./hooks/useEffect/example-2";
import BasicHookUseEffect3 from "./hooks/useEffect/example-3";
import BasicHookUseEffect4 from "./hooks/useEffect/example-4";
import BasicHookUseEffect5 from "./hooks/useEffect/example-5";
import BasicHookUseCallback1 from "./hooks/useCallback/example-1";
import BasicHookUseMemo1 from "./hooks/useMemo/example-1";
import BasicHookUseReducer1 from "./hooks/useReducer/example-1";
import BasicHookUseRef1 from "./hooks/useRef/example-1";
import BasicHookUseLayoutEffect1 from "./hooks/useLayoutEffect/example-1";

function App() {
  const [useState1, setUseState1] = useState(false);
  const [useState2, setUseState2] = useState(false);
  const [useEffect1, setUseEffect1] = useState(false);
  const [useEffect2, setUseEffect2] = useState(false);
  const [useEffect3, setUseEffect3] = useState(false);
  const [useEffect4, setUseEffect4] = useState(false);
  const [useEffect5, setUseEffect5] = useState(false);
  const [useLayoutEffect1, setUseLayoutEffect1] = useState(false);
  const [useRef1, setUseRef1] = useState(false);
  const [useCallback1, setUseCallback1] = useState(false);
  const [useMemo1, setUseMemo1] = useState(false);
  const [useReducer1, setUseReducer1] = useState(false);

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
      <Grid item xs={12}>
        <button onClick={() => setUseEffect3(!useEffect3)}>
          Example useEffect 3
        </button>
        <br />
        {useEffect3 && <BasicHookUseEffect3 />}
      </Grid>
      <Grid item xs={12}>
        <button onClick={() => setUseEffect4(!useEffect4)}>
          Example useEffect 4
        </button>
        <br />
        {useEffect4 && <BasicHookUseEffect4 />}
      </Grid>
      <Grid item xs={12}>
        <button onClick={() => setUseEffect5(!useEffect5)}>
          Example useEffect 5
        </button>
        <br />
        {useEffect5 && <BasicHookUseEffect5 />}
      </Grid>
      <Grid item xs={12}>
        <button onClick={() => setUseLayoutEffect1(!useLayoutEffect1)}>
          Example useLayoutEffect 1
        </button>
        <br />
        {useLayoutEffect1 && <BasicHookUseLayoutEffect1 />}
      </Grid>
      <Grid item xs={12}>
        <button onClick={() => setUseRef1(!useRef1)}>
          Example useRef 1
        </button>
        <br />
        {useRef1 && <BasicHookUseRef1 />}
      </Grid>
      <Grid item xs={12}>
        <button onClick={() => setUseCallback1(!useCallback1)}>
          Example useCallback 1
        </button>
        <br />
        {useCallback1 && <BasicHookUseCallback1 />}
      </Grid>
      <Grid item xs={12}>
        <button onClick={() => setUseMemo1(!useMemo1)}>
          Example useMemo 1
        </button>
        <br />
        {useMemo1 && <BasicHookUseMemo1 />}
      </Grid>
      <Grid item xs={12}>
        <button onClick={() => setUseReducer1(!useReducer1)}>
          Example useReducer 1
        </button>
        <br />
        {useReducer1 && <BasicHookUseReducer1 />}
      </Grid>
    </Grid>
  );
}

export default App;
