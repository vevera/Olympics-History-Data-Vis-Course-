import React, { useEffect } from "react";

import "./index.css";
import { YearContext } from "./year_context.js";
// const YearContext = React.createContext();

const TimeLineTitle = () => {
  return (
    <div className="time-line-title">
      <div className="header-image">
        <h1> 120 anos de Olimpíadas</h1>

        <h4> Uma análise dos jogos olímpicos de verão.</h4>
      </div>
    </div>
  );
};

const TimeLineBottom = () => {
  return (
    <div className="time-line-title">
      <div className="header-image"></div>
    </div>
  );
};

const TimeLineItem = ({ year, text, setVisibleYear }) => {
  //const [offset, setOffset] = useState(0);
  //const {yearState} = React.useContext(YearContext);
  const { setYear } = React.useContext(YearContext);
  useEffect(() => {
    const onScroll = () => {
      const element = document.getElementById(year);
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
      const isVisible =
        rect.top + parseFloat(style.paddingTop) >= 0 &&
        rect.top <=
          (window.innerHeight || document.documentElement.clientHeight);
      // rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      //&&
      // element.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&

      if (isVisible) {
        setYear(year);
        //setVisibleYear(year)
        console.log("Year: ", year, isVisible);
      }
    };
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  //console.log(offset);

  return (
    <>
      <li id={year}>
        <h1>{year}</h1>
        {text}
      </li>
    </>
  );
};

const TimeLine = () => {
  return (
    <div className="time-line">
      <h1>Timeline da trajetória feminina nos jogos olímpicos</h1>
      <ul id={"ulid"}>
        <TimeLineItem
          year={1896}
          text={
            "As Olimpíadas Modernas foram reiniciadas pelo Barão de Coubertin, Pierre de Frédy, em 1896. Coubertin reproduziu as Olimpíadas da Antiguidade na Modernidade, desta forma, a participação das mulheres permaneceu vedada, restando-lhes apenas a assistir às provas. Pierre de Frédy reconhecia o direito das mulheres quanto à educação esportiva, inclusive competindo entre elas. Porém, fora da vista dos homens por razões culturais, antropológicas e fisiológicas. Durante a primeira Olimpíada em 1896, em Atenas, as mulheres participaram apenas como espectadoras, porém a grega Stamati Revithi, realizou o percurso da maratona fora do estádio no dia seguinte à prova masculina, em resposta a proibição feminina nas modalidades olímpicas. Ela realizou a corrida em quatro horas e meia, foi mais rápida que alguns homens, porém não foi reconhecida e provocou o início da gradual inserção das mulheres nos esportes olímpicos."
          }
        />
        <TimeLineItem
          year={1900}
          text={
            'Quatro anos depois, a sede das Olimpíadas de 1900 foi em Paris, marcada na época pelo liberalismo. Devido a lacunas e falta de organização do COI no controle do programa dos jogos foi permitido à participação extraoficial de mulheres em algumas provas, o golfe e o tênis, por serem belos e não possuir contato físico. Coubertin fez um leve recuo e autorizou que 22 mulheres participassem dos jogos em Paris, em 1900. Um número irrisório dentro de um total de 997 atletas, 2,2% deles. E tem mais: das 19 práticas, apenas 5 eram permitidas a elas. Tênis, vela, croquet, hipismo e golfe. Atividades exclusivas da aristocracia e que, de acordo com a visão da época, não demandam muito esforço físico, tampouco "compromete" a feminilidade. Naquele ano, foram 22 atletas admitidas. A condessa Hélène de Pourtalès, nascida nos Estados Unidos, foi a primeira a participar dos jogos, na competição de vela, em 22 de maio de 1900. Hèlène representou a Suíça com a tripulação do barco Lerina, que recebeu uma medalha de ouro. Hèlène foi, portanto, a primeira a participar e a ganhar a medalha. Já a tenista britânica Charlotte Cooper, foi a primeira a vencer em categoria individual.'
          }
        />
        <TimeLineItem
          year={1908}
          text={
            "No ano de 1908, em Londres, as provas eram tênis, patinação no gelo, arco e flecha. Na modalidade barco a vela, as equipes eram mistas, as mulheres do time eram esposas dos atletas. A arqueira britânica Queenie Newall se destacou em 1908 – dentre 25 competidores – vencendo a medalha de ouro. Naquele ano, a presença de mulheres finalmente se tornou oficial, embora ainda muito restrita."
          }
        />
        <TimeLineItem
          year={1912}
          text={
            "Em Estocolmo, 1912, foi permitida a natação. Em 1916 não houve Olimpíadas devido à primeira guerra mundial. Em 1917 foi a criação da Federação das Sociedades Esportivas Femininas da França. Alice Milliat foi uma das grandes expoentes por maior representatividade nas Olimpíadas. Ela militava pela participação de mulheres nas modalidades de Atletismo (corrida, lançamentos e saltos), que ainda eram exclusivas a homens. Em 1917, ela e outros membros da Femina (clube desportivo para mulheres) fundaram a Federação das Sociedades Esportivas Femininas da França. "
          }
        />
        <TimeLineItem
          year={1920}
          text={
            "Em 1920, na Antuérpia, foi incluído o salto ornamental. Diante das recusas do Comitê Olímpico Internacional (COI) em permitir a inserção de mulheres nas demais modalidades, Alice Milliat decidiu dar um passo em outra direção e com Federação Internacional de Esportes Femininos (FSFI) fundou os Jogos Olímpicos Femininos, que teve quatro edições entre 1922 e 1934. No primeiro evento, 77 atletas tomaram parte representando Grã-Bretanha, Suíça, Itália, Noruega e França. Em um ato de resistência e com mais de 15 mil espectadores, elas provaram que o argumento de Pierre não tinha fundamento. Alice era praticante do remo profissional, mas também se destacava no hóquei e natação. Segundo o historiador Florence Carpentier, sua missão com os Jogos Mundiais Femininos era “assumir o controle das competições femininas para escapar da tutela das federações de atletismo”. Seu objetivo era “provar aos líderes do COI as capacidades esportivas das mulheres para serem admitidas em todo o programa olímpico”."
          }
        />
        <TimeLineItem
          year={1928}
          text={
            "Em Amsterdã, 1928, foram inseridas as modalidades, ginástica e atletismo, este último com cinco provas. Ao final da prova de 800 metros algumas mulheres desmaiaram, assim surgiram argumentos que defendiam a exclusão feminina das Olimpíadas devido a sua incapacidade física para provas de resistência. Três anos após a saída de Pierre de Coubertin do Comitê Internacional Olímpico, pela primeira vez na história das Olimpíadas, mulheres passaram a competir nas modalidades de corrida de velocidade (100 metros, 400 metros, 800 metros) e salto em altura. Desde os primeiros jogos, homens competem na categoria de 800 metros, em 1928 foi a primeira vez para as mulheres. Nos jogos seguintes, foram impedidas novamente."
          }
        />
        <TimeLineItem
          year={1936}
          text={
            "Nas Olimpíadas de 1932, em Los Angeles, não foi realizada a prova de 800 metros. Em 1936, em Berlim, as mulheres foram incluídas oficialmente como atletas olímpicas, assim a FEFI foi dissolvida, pois conquistou seu objetivo."
          }
        />
        <TimeLineItem
          year={1972}
          text={
            "Tratado internacional criado pela Assembleia Geral das Nações Unidas sobre os direitos das mulheres, assinado por 188 países. Uma das premissas era garantir “as mesmas oportunidades para participar ativamente nos esportes e na educação física”."
          }
        />
        <TimeLineItem
          year={1984}
          text={
            "Pela primeira vez, duas mulheres passaram a integrar o Comitê Internacional Olímpico: a ex-atleta venezuelana Flor Isava Fonseca, que fazia parte do time equestre, e a ex-velocista finlandesa Pirjo Haeggman."
          }
        />
        <TimeLineItem
          year={1992}
          text={
            "A partir do ano de 1991, todos os esportes que fossem incluídos deveriam permitir que mulheres competissem. A regra, entretanto, não torna mandatória a adaptação nas categorias antigas. Alguns exemplos das novas práticas foram halterofilismo, pentatlo moderno, boxe, taekwondo, triatlo, salto de esqui e trampolim.Em 1995, a Declaração e Plataforma de Ação de Pequim criada na IV Conferência das Nações Unidas sobre a Mulher, evento que tinha como previsão fazer uma análise dos obstáculos a serem superados para que as mulheres possam “exercer seus direitos e alcançar seu desenvolvimento integral como pessoas”. Algumas das recomendações falam sobre a sub-representação feminina em cargos de direção nos esportes, assim como a necessidade de programas que apoiem a participação de meninas e mulheres em atividades esportivas."
          }
        />
        <TimeLineItem
          year={2012}
          text={
            "Nos jogos de 2012, em Londres, pela primeira vez, todos os comitês nacionais enviaram mulheres atletas em suas delegações. Nos jogos de verão daquele ano foi também a primeira vez que mulheres competiram em todos os esportes – isso ocorreu porque o beisebol, exclusivamente masculino, foi retirado da programação."
          }
        />
      </ul>
    </div>
  );
};

export { TimeLine, TimeLineTitle, TimeLineBottom };
