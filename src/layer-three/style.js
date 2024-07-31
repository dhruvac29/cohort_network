const layerThreeStyle = [
  {
    selector: "node",
    css: {
      "text-valign": "center",
      "text-halign": "center",
      width: 200.0,
      "background-color": "rgb(158,202,225)",
      "border-color": "rgb(255,255,255)",
      "border-width": 5.0,
      "text-opacity": 1.0,
      color: "rgb(37,37,37)",
      "font-size": 70,
      height: 200.0,
      "border-opacity": 1.0,
      "background-opacity": 0.7843137254901961,
      shape: "ellipse",
      "font-family": "SansSerif",
      "font-weight": "normal",
      content: "data(name)",
    },
  },
  {
    selector: "node[exposure_cate = 'exposures']",
    css: {
      "background-color": "rgb(199,233,192)",
    },
  },
  {
    selector: "node[exposure_cate = 'both']",
    css: {
      "background-color": "rgb(247,104,161)",
    },
  },
  {
    selector: "node[ id = '554' ]",
    css: {
      "text-valign": "center",
    },
  },
  {
    selector: "node[ id = '556' ]",
    css: {
      "text-valign": "center",
    },
  },
  {
    selector: "node[ id = '558' ]",
    css: {
      "text-valign": "center",
    },
  },
  {
    selector: "node:selected",
    css: {
      "background-color": "rgb(255,0,102)",
    },
  },
  {
    selector: "edge",
    css: {
      "font-size": 50,
      "text-opacity": 1.0,
      "font-family": "SansSerif",
      "font-weight": "normal",
      width: 5.0,
      color: "rgb(37,37,37)",
      "line-color": "rgb(161,217,155)",
      "line-style": "solid",
      "source-arrow-color": "rgb(161,217,155)",
      "source-arrow-shape": "none",
      opacity: 1.0,
      "target-arrow-color": "rgb(161,217,155)",
      "target-arrow-shape": "triangle",
      "curve-style": "bezier",
      content: "data(edge_id)",
    },
  },
  {
    selector: "edge:selected",
    css: {
      "line-color": "rgb(255,0,0)",
    },
  },
];

export default layerThreeStyle;
