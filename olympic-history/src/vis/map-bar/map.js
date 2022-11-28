import React, {useRef, useEffect} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "f3805e82ef20f033";

function Map() {
  const barRef = useRef();
  const viewofDashboardRef = useRef();
  const cssRef = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, name => {
      if (name === "bar") return new Inspector(barRef.current);
      if (name === "viewof dashboard") return new Inspector(viewofDashboardRef.current);
      if (name === "css") return new Inspector(cssRef.current);
    });
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <div ref={barRef} />
      <div ref={viewofDashboardRef} />
      <div ref={cssRef} />
    </>
  );
}

export default Map;