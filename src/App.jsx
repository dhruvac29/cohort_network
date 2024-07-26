import cytoscape from "cytoscape";
import React, { useEffect, useRef, useState } from "react";
import elements from "./elements";
import style from "./style";
import "./App.css";
import data from "./data";

const App = () => {
  const canvasRef = useRef(null);

  const [pubData, setPubData] = useState([]);

  useEffect(() => {
    const graph = cytoscape({
      container: canvasRef.current,
      boxSelectionEnabled: true,
      elements: elements,
      style: style,
      layout: {
        name: "preset",
      },
    });

    graph.on("tap", "edge", function (evt) {
      const edge = evt.target;
      const edgeId = edge.data().edge_id;

      const loadedData = data.filter((value) => value.edgeId === edgeId);
      console.log(edgeId, data, loadedData);
      setPubData([...loadedData]);
    });
  }, []);

  return (
    <>
      <header className="header">
        <h1>Cohort Network</h1>
      </header>
      <div className="container">
        <div className="sidebar left"> Placeholder for explanation text</div>
        <div className="main-panel" ref={canvasRef}></div>
        <div className="sidebar right">
          <ol>
            {pubData.map((data) => {
              return (
                <li>
                  {data.publication}
                  <br />
                  <a class="doi" href={data.DOI} target="_blank">
                    {data.DOI}
                  </a>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
