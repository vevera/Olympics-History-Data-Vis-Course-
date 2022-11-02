import React, {useState} from "react";
import * as vl from "../vega/src/index.js";
import { Vega } from "react-vega";

import {TimeLine, TimeLineTitle, TimeLineBottom} from "./timeLine.js";
import StaticView from "./staticView.js";
import "./index.css"
import { YearContext } from "./year_context.js";

//const YearContext = React.createContext();

const TimeLineVis = () => {

    const [year, setYear] = useState(1896)

    return (
        <YearContext.Provider value={{year, setYear}}>
            <div className="container">
                <TimeLineTitle/>
                <div className="container2">
                    <TimeLine />
                    <StaticView />
                    
                </div>
                <TimeLineBottom/>
            </div>
        </YearContext.Provider>
    );
    
}

export default TimeLineVis;