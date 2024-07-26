const style = [
  {
    selector: "node",
    css: {
      "background-color": "rgb(158,202,225)",
      "text-opacity": 1.0,
      // "text-transform": "capitalize",
      "border-color": "rgb(255,255,255)",
      color: "rgb(37,37,37)",
      "background-opacity": 0.7843137254901961,
      "border-opacity": 1.0,
      "font-weight": "normal",
      "border-width": 5.0,
      width: 100.0,
      shape: "ellipse",
      "text-valign": "center",
      "text-halign": "center",
      height: 100.0,
      "font-size": 50,
      content: "data(name)",
    },
  },
  {
    selector: "node[exposure_attr = 'exposures']",
    css: {
      "background-color": "rgb(199,233,192)",
    },
  },
  {
    selector: "node[exposure_attr = 'both']",
    css: {
      "background-color": "rgb(247,104,161)",
    },
  },
  {
    selector: "node[ id = '352' ]",
    css: {
      "text-valign": "center",
    },
  },
  {
    selector: "node[ id = '354' ]",
    css: {
      "text-valign": "center",
    },
  },
  {
    selector: "node[ id = '356' ]",
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
      opacity: 1.0,
      "font-family": "SansSerif",
      "font-weight": "normal",
      width: 5.0,
      color: "rgb(37,37,37)",
      "line-color": "rgb(161,217,155)",
      "source-arrow-color": "rgb(161,217,155)",
      "line-style": "solid",
      "source-arrow-shape": "none",
      "text-opacity": 1.0,
      "font-size": 40,
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

export default style;
