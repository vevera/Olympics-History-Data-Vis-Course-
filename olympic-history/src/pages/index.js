import React, { useState } from "react";

import { TimeLine, TimeLineTitle, TimeLineBottom } from "./timeLine.js";
import StaticView from "./staticView.js";
import "./index.css";
import { YearContext } from "./year_context.js";
import MapBar from "../vis/map-bar/mapBar.js";
import BubblePlot from "../vis/bubble/bubblePlot.js";

//const YearContext = React.createContext();

const TimeLineVis = () => {
  const [year, setYear] = useState(1896);

  return (
    <YearContext.Provider value={{ year, setYear }}>
      <div className="container">
        <TimeLineTitle />
        <div className="container2">
          <TimeLine />
          <StaticView />
        </div>
        <div style={{ background: "#012030", margin: 10 }}>
          <br />
          <h1 style={{ color: "white" }}>
            Mapa e Gráfico de Barras Interativo
          </h1>
          <br />
          <br />
          <p style={{ color: "white", fontSize: 20 }}>
            No painel abaixo é mostrado um mapa que interage com o gráfico de
            barras ao lado quando um país é selecionado. Para cada país é
            mostrado a sua taxa de aproveitamento por esporte nas olimpíadas.
          </p>
          <MapBar className="mapbar" />
        </div>
        <div className="chart">
          
        </div>

        <div style={{ background: "#012030", margin: 10 }}>
          <br />
          <h1 style={{ color: "white" }}>Gráfico de Bolhas Interativo</h1>
          <br />
          <br />
          <p style={{ color: "white", fontSize: 20 }}>
            No gráfico a seguir são representados os 15 países que possuem o
            maior número de medalhas, a cada década, iniciando em 1890 até 2010.
            O intuito da visualização é correlacionar o numero de atletas
            enviados, numero de medalhas ganhas e também mostrar se existe
            alguma influencia de fatores econômicos, como o pib per capita,
            sobre esses valores.
          </p>
        </div>
        <div className="chart2">
          <BubblePlot className="mapbar" />
        </div>
        <div
          style={{
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 40,
            textAlign: "center",
          }}
        >
          <p style={{ color: "white", fontSize: 20 }}>
            Como observado no gráfico acima, podemos inferir a não existência de
            uma relação recorrente entre possuir um PIB per capta elevado e um
            bom desempenho. É bastante claro, a competitividade dos países ao
            longo dos anos, e não é raro observar que países com diferentes PIB
            per capta com resultados bastante semelhantes.
          </p>
        </div>
        <TimeLineBottom />
      </div>
    </YearContext.Provider>
  );
};

export default TimeLineVis;
