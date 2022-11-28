import React, { useEffect, useState } from "react";
import "./index.css";
import PieChart from "../vis/women/pieChart.js";
// import olympic_data from "../datasets/olympic_data.json";

import { YearContext } from "./year_context.js";

//const YearContext = React.createContext();

const StaticView = () => {
  const { year } = React.useContext(YearContext);

  //const dataset = GetData(olympic_data, year);
  return (
    <div className="static-view">
      <PieChart/>
      <div id="view"></div>
    </div>
  );
};

export default StaticView;
