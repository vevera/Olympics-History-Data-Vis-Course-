import React, {useRef, useEffect} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "f361f31998193cb5";
import "./index.css";

function BubblePlot() {
  const viewofYearFilterRef = useRef();
  const chartDynamicRef = useRef();
  const cssRef = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, name => {
      if (name === "viewof yearFilter") return new Inspector(viewofYearFilterRef.current);
      if (name === "chartDynamic") return new Inspector(chartDynamicRef.current);
      if (name === "css") return new Inspector(cssRef.current);
      return ["a"].includes(name);
    });
    return () => runtime.dispose();
  }, []);

  return (
    <div style={{display:"flex", position:"relative"}}>
      <div className="bubble-plot" ref={viewofYearFilterRef} />
      <div className="bubble-plot" ref={chartDynamicRef} />
      <div ref={cssRef} />
    </div>
  );
}

export default BubblePlot;