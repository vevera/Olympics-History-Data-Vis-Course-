import React, {useState} from "react";

import {TimeLine, TimeLineTitle, TimeLineBottom} from "./timeLine.js";
import StaticView from "./staticView.js";
import "./index.css"
import { YearContext } from "./year_context.js";
import MapBar from "../vis/map-bar/mapBar.js";
import BubblePlot from "../vis/bubble/bubblePlot.js";

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
                <div className="chart">
                    <MapBar className="mapbar"/>
                </div>
                <div className="chart">
                    <BubblePlot className="mapbar"/>
                </div>
                <TimeLineBottom/>
            </div>
        </YearContext.Provider>
    );
    
}

export default TimeLineVis;