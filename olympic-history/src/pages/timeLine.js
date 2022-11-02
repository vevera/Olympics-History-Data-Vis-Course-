import React, {useEffect, useState} from "react";
import * as vl from "../vega/src/index.js";
import { Vega } from "react-vega";
import { LoremIpsum } from "react-lorem-ipsum";

import "./index.css"
import { getElementError } from "@testing-library/react";
import { YearContext } from "./year_context.js";
// const YearContext = React.createContext();

const TimeLineTitle = () => {
    return (
    <div className="time-line-title">



        <div className="header-image">

            <h1> 120 anos de Olimpíadas</h1>

            <h4> The unreasonable power of nested decision rules.</h4>
        </div>
    
    </div>
    )
}

const TimeLineBottom = () => {
    return (
    <div className="time-line-title">

        <div className="header-image">
        </div>
    
    </div>
    )
}

const TimeLineItem = ({year, setVisibleYear}) => {

    //const [offset, setOffset] = useState(0);
    //const {yearState} = React.useContext(YearContext);
    const {setYear} = React.useContext(YearContext);
    useEffect(() => {
        const onScroll = () => {
            
           const element = document.getElementById(year)
           const rect = element.getBoundingClientRect();
           var style = element.currentStyle || window.getComputedStyle(element);
        //     var ul = document.getElementById("ulid").getBoundingClientRect();
        //    console.log(

        //     {
        //         "window" : window.innerHeight,
        //         "client" :  document.documentElement.clientHeight
        //     }
        //    )
            // var style = window.getComputedStyle(element);
            
           //console.log("Year", year, rect, parseFloat(style.paddingTop) + rect.top)
           const isVisible =  (
                rect.top  + parseFloat(style.paddingTop) >= 0 &&
                rect.top <= (window.innerHeight || document.documentElement.clientHeight)
                // rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) 
                //&&
                // element.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                
            );

            if (isVisible){
                setYear(year);
                //setVisibleYear(year)
                console.log("Year: ", year, isVisible);
            }
            
        };
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    //console.log(offset); 

    return (
        <>
            <li id={year}>
                <h1 >{year}</h1>
                    <LoremIpsum
                        p={1}
                        avgSentencesPerParagraph={20}
                        />
            </li>
        </>

    );
    
};

const TimeLine = () => {

    
    return (
        

        <div className="time-line">

            

            <ul id = {"ulid"}>
                <TimeLineItem year={1896} />
                <TimeLineItem year={1936} />
                <TimeLineItem year={1948} />
                <TimeLineItem year={1976} />
                <TimeLineItem year={1992} />
                <TimeLineItem year={2016} />
            </ul>
            


        </div>
        
        

    );


};

export  {TimeLine, TimeLineTitle, TimeLineBottom};