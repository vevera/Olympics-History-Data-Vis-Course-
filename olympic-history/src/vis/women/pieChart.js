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
    <div style={{ width: "100%", height: "100%", display:"flex" , flex: 7, flexDirection:"column"}}>
      <div style={{ display: "none" }} ref={yearCurRef} />

      <div style={{flex: 3, position:"relative"}} className="tree" ref={bRef} />
     
     
      <div style={{ display: "flex", flex:4, flexDirection:"row" }}>
        {/* <div style={{/*transform: "translate(0%, 6%)",*/ /*display:"flex", flexDirection:"column", alignItems:"center"}}> */}
          {/* <h3 style={{/*transform: "translate(20%, -450%)"}>Proporção Homens x Mulheres </h3>*/ }
          <div style={{position:"relative", flex:2}} className="pie" ref={piechartRef} />
        {/* </div> */}
        {/* <div style={{/*display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", flex:2} }> */}
          <div style={{position:"relative", flex:2}} className="bar" ref={barsRef} />
          {/* <h3 style={{transform: "translate(-45%, -600%)",marginBottom:"5%"}}>Distribuição de Modalidades </h3> */}
        {/* </div> */}
      </div>
      
    </div>
  );
}

export default PieChart;
