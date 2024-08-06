import React, { useEffect, useRef, useState } from "react";
import cytoscape from "cytoscape";
import "./App.css";
import layerOneElements from "./layer-one/elements";
import layerOneStyle from "./layer-one/style";
import layerOneData from "./layer-one/data";
import layerTwoStyle from "./layer-two/style";
import layerTwoData from "./layer-two/data";
import layerTwoElements from "./layer-two/elements";
import layerThreeElements from "./layer-three/elements";
import layerThreeStyle from "./layer-three/style";
import layerThreeData from "./layer-three/data";

const CohortNetworkPage = () => {
  const canvasRef = useRef(null);
  const [pubData, setPubData] = useState([]);
  const [currentLayer, setCurrentLayer] = useState("2");

  useEffect(() => {
    setPubData([]);
    let elements = [];
    let style = [];
    let data = [];

    switch (currentLayer) {
      case "1":
        elements = layerOneElements;
        style = layerOneStyle;
        data = layerOneData;
        break;
      case "2":
        elements = layerTwoElements;
        style = layerTwoStyle;
        data = layerTwoData;
        break;
      case "3":
        elements = layerThreeElements;
        style = layerThreeStyle;
        data = layerThreeData;
        break;
      default:
        elements = layerTwoElements;
        style = layerTwoStyle;
        data = layerTwoData;
        break;
    }

    const graph = cytoscape({
      container: canvasRef.current,
      boxSelectionEnabled: true,
      elements: elements,
      style: style,
      layout: {
        name: "preset",
      },
    });

    graph.on("tap", "edge", (evt) => {
      const edge = evt.target;
      const edgeId = edge.data().edge_id;

      const loadedData = data.filter((value) => value.edgeId === edgeId);
      setPubData(loadedData);
    });

    return () => {
      graph.destroy();
    };
  }, [currentLayer]);

  const handleLayerSelect = (event) => {
    setCurrentLayer(event.target.value);
  };

  return (
    <>
      <div className="container">
        <div className="sidebar left">
          <select onChange={handleLayerSelect} value={currentLayer}>
            <option value="1">Layer 1</option>
            <option value="2">Layer 2</option>
            <option value="3">Layer 3</option>
          </select>
        </div>
        <div className="main-panel" ref={canvasRef}></div>
        <div className="sidebar right">
          <ol>
            {pubData.map((data, index) => (
              <li key={index}>
                {data.publication}
                <br />
                <a
                  className="doi"
                  href={data.DOI}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {data.DOI}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
};

export default CohortNetworkPage;
