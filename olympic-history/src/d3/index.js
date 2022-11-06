import React from "react";
import * as vl from "../vega/src/index.js";
import { Vega } from "react-vega";

import vegaEmbed from "vega-embed";
import { View } from "vega";
import { Warn, None } from "vega";

import { runtimeContext } from "vega";
import VegaEmbed from "react-vega/lib/VegaEmbed.js";

import { changeset } from "vega";

import { parse } from "vega";

import * as d3 from "d3";

// import * as d3 from

// import { runtimeContext } from "vega";
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

const GetData = (olympics, year) => {
  const noc_map = new Map();

  let olympics_sorted = olympics.filter((d) => d.Year === year);
  olympics_sorted.forEach((d) => {
    if (!noc_map.has(d.NOC)) {
      noc_map.set(d.NOC, 1);
    } else {
      noc_map.set(d.NOC, noc_map.get(d.NOC) + 1);
    }
  });

  let arr = Array.from(noc_map, ([key, value]) => {
    return { NOC: key, count: value, year: year };
  });

  // return [{ NOC: "USA", count: noc_map.get("USA"), year: year }];

  const compare_noc_count = (a, b) => b.count - a.count;
  arr = arr.sort(compare_noc_count);

  return arr.slice(0, 12);
};

// const spec = vl
//   .description("Descrição")
//   .width(500)
//   .height(500)
//   .padding(5)
//   .autosize("pad");

const spec = {
  description: "A specification outline example.",
  width: 500,
  height: 200,
  padding: 5,
  autosize: "pad",
  bindings: [
    {
      signal: "scalePadding",
      input: "range",
      min: 0,
      max: 1000,
      step: 1,
    },
  ],
  signals: [],
  data: [],
  scales: [],
  projections: [],
  axes: [],
  legends: [],
  marks: [],
};

console.log("After view creation");
const Visu = ({ dataset, year }) => {
  const width = 300;

  const runtime = parse(spec);
  const view = new View(runtime)
    .logLevel(None) // set view logging level
    .renderer("svg") // set render type (defaults to 'canvas')
    .initialize("#view") // set parent DOM element
    .hover(); // enable hover event processing, *only call once*!

  view.runAsync();
  // vl.changeset().insert();

  const medals = vl
    .markBar()
    .background(null)
    .data({ name: "table" })
    //.transform({ filter: { field: "NOC", equal: "USA" } })
    .encode(
      vl
        .y()
        .fieldN("NOC")
        .sort(null)
        .axis({ labelColor: "white", titleColor: "white" })
        .title("Comitê Olímpico Nacional"),
      vl
        .x()
        .fieldQ("count")
        .axis({ labelColor: "white", titleColor: "white" })
        .title(""),
      vl.color({ value: "#ff9900" })
    )

    .width(350);
  //VegaEmbed;
  //const vegaembed = new VegaEmbed();

  vegaEmbed("#view", medals.toSpec()).then(function (res) {
    const datasetfiltrado = GetData(dataset, year);
    var changeSet = changeset()
      .insert(datasetfiltrado)
      .remove(function (t) {
        return t.year !== year;
      });
    res.view.change("table", changeSet).run();
  });

  // const vega_r = vl
  //   .markBar()
  //   .title("Number of events by magnitude")
  //   .data(dataset)
  //   .encode(vl.x().fieldQ("magnitude"), vl.y().count().title(""))
  //   .width(width / 2 - 40)
  //   .width(350);

  console.log(medals.toSpec());
  return <></>;
  //return <Vega spec={medals.toSpec()} />;
};

export default Visu;
