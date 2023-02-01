import { useState } from "react";
import Color from "./components/Color";

import "./App.css";

type RandomBetween = (a: number, b: number) => number;

function App() {
  const [colorList, setColorList] = useState<string[]>([]);

  const addColorToList = () => {
    const rgb = colorMaker();
    setColorList((prevColor) => [...prevColor, rgb]);
  };

  const colorMaker = () => {
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const rgb = `rgb(${r},${g},${b})`;
    return rgb;
  };

  const randomBetween: RandomBetween = (min, max) =>
    min + Math.floor(Math.random() * (max - min + 1));

  return (
    <div className="app">
      <button onClick={addColorToList} className="add-color-btn">
        Add Color
      </button>
      <Color listOfColors={colorList} />
    </div>
  );
}

export default App;
