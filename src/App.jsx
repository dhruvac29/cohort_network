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

const App = () => {
  const canvasRef = useRef(null);
  const [pubData, setPubData] = useState([]);
  const [currentLayer, setCurrentLayer] = useState("Layer-2");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    let elements = [];
    let style = [];
    let data = [];

    switch (currentLayer) {
      case "Layer-1":
        elements = layerOneElements;
        style = layerOneStyle;
        data = layerOneData;
        break;
      case "Layer-2":
        elements = layerTwoElements;
        style = layerTwoStyle;
        data = layerTwoData;
        break;
      case "Layer-3":
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

    graph.on("tap", "edge", function (evt) {
      const edge = evt.target;
      const edgeId = edge.data().edge_id;

      const loadedData = data.filter((value) => value.edgeId === edgeId);
      setPubData([...loadedData]);
    });

    return () => {
      graph.destroy();
    };
  }, [currentLayer]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLayerSelect = (layer) => {
    setCurrentLayer(layer);
    setIsDropdownOpen(false);
  };

  return (
    <>
      <header className="header">
        <h1>Cohort Network</h1>
      </header>
      <div className="container">
        <div className="sidebar left">
          <h2 className="dropdown-heading">Select Layer</h2>
          <div className="dropdown">
            <button
              className="dropdown-btn"
              aria-haspopup="menu"
              onClick={toggleDropdown}
            >
              <span>{currentLayer}</span>
              <span
                className={`arrow ${isDropdownOpen ? "rotate" : ""}`}
              ></span>
            </button>
            <ul
              className={`dropdown-content ${isDropdownOpen ? "visible" : ""}`}
              role="menu"
            >
              <li
                style={{ "--delay": 1 }}
                onClick={() => handleLayerSelect("Layer-1")}
              >
                <a href="#">Layer - 1</a>
              </li>
              <li
                style={{ "--delay": 2 }}
                onClick={() => handleLayerSelect("Layer-2")}
              >
                <a href="#">Layer - 2</a>
              </li>
              <li
                style={{ "--delay": 3 }}
                onClick={() => handleLayerSelect("Layer-3")}
              >
                <a href="#">Layer - 3</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="main-panel" ref={canvasRef}></div>
        <div className="sidebar right">
          <ol>
            {pubData.map((data) => (
              <li key={data.edgeId}>
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

export default App;
