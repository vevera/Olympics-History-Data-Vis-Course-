import React from "react";
import * as vl from "../vega/src/index.js";
import { Vega } from "react-vega";

// const dataset = [
//   { magnitude: 40 },
//   { magnitude: 10 },
//   { magnitude: 20 },
//   { magnitude: 40 },
//   { magnitude: 45 },
//   { magnitude: 63 },
//   { magnitude: 40 },
//   { magnitude: 12 },
// ];

const Visu = ({dataset}) => {
  const width = 300;

  const medals = vl.markBar().background(null).data(dataset).encode(
    vl.y().fieldN('NOC').sort(null).axis({labelColor: "white", titleColor: "white"}).title("Comitê Olímpico Nacional"),
    vl.x().fieldQ('count').axis({labelColor: "white", titleColor: "white"}).title(""),
    vl.color({"value": "#ff9900"})
  ).
  width(350)




  // const vega_r = vl
  //   .markBar()
  //   .title("Number of events by magnitude")
  //   .data(dataset)
  //   .encode(vl.x().fieldQ("magnitude"), vl.y().count().title(""))
  //   .width(width / 2 - 40)
  //   .width(350);

  console.log(medals.toSpec());

  return <Vega spec={medals.toSpec()} />;
};

export default Visu;
