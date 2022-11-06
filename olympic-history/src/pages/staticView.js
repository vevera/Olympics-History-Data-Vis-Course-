import React, { useEffect, useState } from "react";
import * as vl from "../vega/src/index.js";
import { Vega } from "react-vega";
import Visu from "../d3/index.js";
import "./index.css";
// import olympic_data from "../datasets/olympic_data.json";

import { YearContext } from "./year_context.js";

//const YearContext = React.createContext();

const StaticView = () => {
  const { year } = React.useContext(YearContext);

  //const dataset = GetData(olympic_data, year);

  let olympic_data = require("../datasets/olympic_data.json");

  console.log(olympic_data);
  return (
    <div className="static-view">
      <h1> PAGINA GRANDE E PARADA</h1>

      <p> EU SOU MUITO GRANDE</p>
      <p> E TBM MUITO PARADA</p>
      <div id="view"></div>
      <Visu dataset={olympic_data} year={year} />
    </div>
  );
};

export default StaticView;
