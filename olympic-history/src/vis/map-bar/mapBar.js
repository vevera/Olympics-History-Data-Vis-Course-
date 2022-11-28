import React, {useRef, useEffect} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "f3805e82ef20f033";
import "./index.css";

function MapBar() {
  const barChartSvgRef = useRef();
  const barRef = useRef();
  const axisFinalRef = useRef();
  const cssRef = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, name => {
      if (name === "barChartSvg") return new Inspector(barChartSvgRef.current);
      if (name === "bar") return new Inspector(barRef.current);
      if (name === "axisFinal") return new Inspector(axisFinalRef.current);
      if (name === "css") return new Inspector(cssRef.current);
      return ["map","g1","title","barChartRaceUpdate","viewof dashboard"].includes(name);
    });
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <div className="bar-chart-svg" style = {{display: "None"}} ref={barChartSvgRef} />
      <div className="bar-chart-svg" ref={barRef} />
      <div style = {{display: "None"}} ref={axisFinalRef} />
      <div ref={cssRef} />
    </>
  );
}

export default MapBar;