import React, { useEffect, useState } from "react";
import * as vl from "../vega/src/index.js";
import { Vega } from "react-vega";
import Visu from "../d3/index.js";
import "./index.css"
// import olympic_data from "../datasets/olympic_data.json";

import { YearContext } from "./year_context.js";

//const YearContext = React.createContext();

const GetData = (olympics, year) => {


    const noc_map = new Map();

    let olympics_sorted = olympics.filter(d => d.Year === year)
    olympics_sorted.forEach(d => {
        if (!noc_map.has(d.NOC)){
            noc_map.set(d.NOC, 1);
        }
        else{
            noc_map.set(d.NOC, noc_map.get(d.NOC) + 1);
        }
    });

    let arr = Array.from(noc_map, ([key, value]) => {
        return {"NOC" : key, "count": value};
    });

    const compare_noc_count = (a, b) =>  b.count -a.count;
    arr = arr.sort(compare_noc_count);
    return arr.slice(0, 12);

}

const StaticView = () => {


    // const [data, setData] = useState();
    const {year} = React.useContext(YearContext);
    // var jsonOlympic = require('../datasets/olympic_data.json');
    // useEffect(() => {


    //     fetch('public/datasets/olympic_data.json')
    //     .then((response) => response.json())
    //     .then((json) => console.log(json));
    // }, [])
    let olympic_data = require('../datasets/olympic_data.json');
    
    console.log(olympic_data)
    return (
        <div className="static-view">

            <h1> PAGINA GRANDE E PARADA</h1>


            <p> EU SOU MUITO GRANDE</p>
            <p> E TBM MUITO PARADA</p>

            <Visu dataset={GetData(olympic_data, year)}/> 
        </div>
    );



};

export default StaticView;