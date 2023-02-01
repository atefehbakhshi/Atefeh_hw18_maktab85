import { useState } from "react";
import AdjustColor from "./components/AdjustColor";

import "./App.css";

export interface IColorHandler {
  r: number;
  g: number;
  b: number;
}

// type Color = Parameters<AdjustColorProps["onColorHandler"]>[0];

function App() {
  const [color, setColor] = useState("rgb(127.5, 127.5, 127.5)");
  const colorHandler = (colorObject: IColorHandler) => {
    setColor(`rgb(${colorObject.r}, ${colorObject.g}, ${colorObject.b})`);
  };

  return (
    <div className="app">
      <AdjustColor onColorHandler={colorHandler} />
     <div className="result">
     <div className="color-box" style={{ backgroundColor: color }}></div>
      <p>{color}</p>
     </div>
    </div>
  );
}

export default App;
