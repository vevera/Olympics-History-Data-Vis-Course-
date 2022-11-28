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
            <br />
            Para o cálculo da taxa de apoveitamento foram definidos pesos 1, 2 e
            3 para as medalhas de bronze, prata e ouro. Após isso, é feito o
            somatório das medatlas multiplicando-as pelos seus pesos
            correspondentes.
            <br />
            Por fim, vamos ter essa soma dividida pelo numero de atletas
            enviados pelo país, gerando assim a taxa de aproveitamento.
          </p>
          <br />
          <br />
          <br />
          <br />
        </div>
        <div className="chart">
          <MapBar className="mapbar" />
        </div>
        <div style={{ background: "#012030", margin: 10 }}>
          <br />
          <h1 style={{ color: "white" }}>Gráfico de Bolhas Interativo</h1>
          <br />
          <br />
          <p style={{ color: "white", fontSize: 20 }}>
            Aqui temos a visualização de um gráfico de bolhas em que seus eixos
            x e y correspondem, respectivamente, ao total de medalhas e o total
            de atletas enviados. Cada círculo no gráfico representa um país e
            sua área representa o seu pib per cápita.
            <br />
            No gráfico, a cada década, iniciando em 1890 até 2010, são
            representados os 15 países que possuem o maior número de medalhas. O
            intuito da visualização é ver a relação entre numero de atletas
            enviados, numero de medalhas ganhas e fatores economicos.
          </p>
        </div>
        <div className="chart">
          <BubblePlot className="mapbar" />
        </div>
        <TimeLineBottom />
      </div>
    </YearContext.Provider>
  );
};

export default TimeLineVis;
