import React, {useRef, useEffect, useState} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "f7f4ac94baa60885";
import "./index.css"

import { YearContext } from "./../../pages/year_context.js";

function PieChart () {
  const yearCurRef = useRef();
  const piechartRef = useRef();
  const outersvgRef = useRef();
  const svgRef = useRef();
  const piechartmalefemaleRef = useRef();
  const barsRef = useRef();
  const svgBarRef = useRef();
  const cssRef = useRef();

  const [runtime, setRuntime] = useState();
  const [main, setMain] = useState();

  const {year} = React.useContext(YearContext);

  useEffect(() => {
    setRuntime(new Runtime());
  }, []);

  useEffect(() => {
    if(runtime){
        const m = runtime.module(notebook, name => {
            if (name === "yearCur") return new Inspector(yearCurRef.current);
            if (name === "piechart") return new Inspector(piechartRef.current);
            if (name === "outersvg") return new Inspector(outersvgRef.current);
            if (name === "svg") return new Inspector(svgRef.current);
            if (name === "piechartmalefemale") return new Inspector(piechartmalefemaleRef.current);
            if (name === "bars") return new Inspector(barsRef.current);
            if (name === "svgBar") return new Inspector(svgBarRef.current);
            if (name === "css") return new Inspector(cssRef.current);
            return ["show","show2","barras1"].includes(name);
          });
          setMain(m);
          return () => runtime.dispose();
    } 
  }, [runtime]);

  if(main){
    main.redefine("yearCur", year);
  }

  return (
    <>
      <div style={{display:"None"}} ref={yearCurRef} />
      <div className="pie" ref={piechartRef} />
      <div style={{display:"None"}} ref={outersvgRef} />
      <div style={{display:"None"}} ref={svgRef} />
      <div style={{display:"None"}} ref={piechartmalefemaleRef} />
      <div className="bar" ref={barsRef} />
      <div ref={svgBarRef} />
      <div ref={cssRef} />
    </>
  );
}

export default PieChart;