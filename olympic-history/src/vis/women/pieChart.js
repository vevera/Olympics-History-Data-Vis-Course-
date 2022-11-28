import React, { useRef, useEffect, useState } from "react";
import { Runtime, Inspector } from "@observablehq/runtime";
import notebook from "f7f4ac94baa60885";

import { YearContext } from "./../../pages/year_context.js";
import "./index.css";

function PieChart() {
  const yearCurRef = useRef();
  const piechartRef = useRef();
  const barsRef = useRef();
  const bRef = useRef();

  const [runtime, setRuntime] = useState();
  const [main, setMain] = useState();

  const { year } = React.useContext(YearContext);

  useEffect(() => {
    setRuntime(new Runtime());
  }, []);

  useEffect(() => {
    if (runtime) {
      const m = runtime.module(notebook, (name) => {
        if (name === "yearCur") return new Inspector(yearCurRef.current);
        if (name === "piechart") return new Inspector(piechartRef.current);
        if (name === "bars") return new Inspector(barsRef.current);
        if (name === "b") return new Inspector(bRef.current);
        return ["show", "show2", "tree"].includes(name);
      });
      setMain(m);
      return () => runtime.dispose();
    }
  }, [runtime]);

  if (main) {
    main.redefine("yearCur", year);
  }
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div style={{ display: "none" }} ref={yearCurRef} />
      <div style={{ display: "flex" }}>
        <div className="pie" ref={piechartRef} />
        <div className="bar" ref={barsRef} />
      </div>
      <div className="tree" ref={bRef} />
    </div>
  );
}

export default PieChart;

// import React, {useRef, useEffect} from "react";
// import {Runtime, Inspector} from "@observablehq/runtime";
// import notebook from "f7f4ac94baa60885";

// function Notebook() {
//   const yearCurRef = useRef();
//   const piechartRef = useRef();
//   const barsRef = useRef();
//   const bRef = useRef();

//   useEffect(() => {
//     const runtime = new Runtime();
//     runtime.module(notebook, name => {
//       if (name === "yearCur") return new Inspector(yearCurRef.current);
//       if (name === "piechart") return new Inspector(piechartRef.current);
//       if (name === "bars") return new Inspector(barsRef.current);
//       if (name === "b") return new Inspector(bRef.current);
//       return ["show","show2","tree"].includes(name);
//     });
//     return () => runtime.dispose();
//   }, []);

//   return (
//     <>
//       <div ref={yearCurRef} />
//       <div ref={piechartRef} />
//       <div ref={barsRef} />
//       <div ref={bRef} />
//       <p>Credit: <a href="https://observablehq.com/d/f7f4ac94baa60885">Time Line - mulheres by Mateus Gonçalves</a></p>
//     </>
//   );
// }

// export default Notebook;
