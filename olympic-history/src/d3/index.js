import React from "react";
import * as d3 from "d3";
import { Library } from "@observablehq/stdlib/";
import * as vl from "../vega/src/index.js"
import { Vega } from 'react-vega';
//import * as vega from "vega";
// import ReactDOM from "react-dom/client";

const useD3 = (renderChartFn, dependencies) => {
  const ref = React.useRef();

  React.useEffect(() => {
    renderChartFn(d3.select(ref.current));
    return () => {};
  }, dependencies);
  return ref;
};

const dataset = [
  { magnitude: 40 },
  { magnitude: 10 },
  { magnitude: 20 },
  { magnitude: 40 },
  { magnitude: 45 },
  { magnitude: 63 },
  { magnitude: 40 },
  { magnitude: 12 },
];

const Visu = () => {
  const ref = useD3((svg) => {
    svg
      .selectAll("circle")
      .data(dataset)
      .enter()
      .append("circle")
      .attr("cx", (d) => d[0])
      .attr("cy", (d) => d[1])
      .attr("r", 5)
      .attr("fill", "DarkCyan");
  }, []);

  const width = 300;

  const vega_r = vl
    .markBar()
    .title("Number of events by magnitude")
    .data(dataset)
    .encode(vl.x().fieldQ("magnitude"), vl.y().count().title(""))
    .width(width / 2 - 40)
    .height(150);

  var a = {
    data: {
      values: [
        { a: "C", b: 2 },
        { a: "C", b: 7 },
        { a: "C", b: 4 },
        { a: "D", b: 1 },
        { a: "D", b: 2 },
        { a: "D", b: 6 },
        { a: "E", b: 8 },
        { a: "E", b: 4 },
        { a: "E", b: 7 },
      ],
    },
    mark: "point",
    encoding: {
      x: { field: "a", type: "nominal" },
      y: { aggregate: "average", field: "b", type: "quantitative" },
    },
  };
  console.log(vega_r.toSpec());
  //const result = embed("#vis", a);
  
  return <Vega spec={vega_r.toSpec()}/>;

  // <svg
  //   ref={ref}
  //   style={{
  //     height: 500,
  //     width: "100%",
  //     marginRight: "0px",
  //     marginLeft: "0px",
  //   }}
  // >
  //   <g className="plot-area" />
  //   <g className="x-axis" />
  //   <g className="y-axis" />
  // </svg>
};

export default Visu;
