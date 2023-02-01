import { FC, useState } from "react";
import styles from "./AdjustColor.module.css";

export interface Color {
  r: number;
  g: number;
  b: number;
}
export interface AdjustColorProps {
  onColorHandler: (args: Color) => void;
}

// export interface AdjustColorProps {
//   onColorHandler: (args: { r: number; g: number; b: number }) => void;
// }

const AdjustColor: FC<AdjustColorProps> = ({ onColorHandler }) => {
  const [red, setRed] = useState(127.5);
  const [green, setGreen] = useState(127.5);
  const [blue, setBlue] = useState(127.5);

  const obj = {
    r: red,
    g: green,
    b: blue,
  };

  const increase = (colorName: string) => {
    if (colorName === "red" && red < 255) {
      setRed(red + 25.5);
      obj.r = red + 25.5;
    }
    if (colorName === "green" && green < 255) {
      setGreen(green + 25.5);
      obj.g = green + 25.5;
    }
    if (colorName === "blue" && blue < 255) {
      setBlue(blue + 25.5);
      obj.b = blue + 25.5;
    }
    // do not re-render if the colors are more than 255
    if (red <= 255 && green <= 255 && blue <= 255) {
      onColorHandler(obj);
    }
  };

  const decrease = (colorName: string) => {
    if (colorName === "red" && red > 0) {
      setRed(red - 25.5);
      obj.r = red - 25.5;
    }
    if (colorName === "green" && green > 0) {
      setGreen(green - 25.5);
      obj.g = green - 25.5;
    }
    if (colorName === "blue" && blue > 0) {
      setBlue(blue - 25.5);
      obj.b = blue - 25.5;
    }
    // do not re-render if the colors are less than 255
    if (red >= 0 && green >= 0 && blue >= 0) {
      onColorHandler(obj);
    }
  };

  return (
    <>
      <div className={styles["color-item"]}>
        <p className={styles.text}>Red</p>
        <button
          className={styles["change-color-btn"]}
          onClick={() => increase("red")}
        >
          Increase Red
        </button>
        <button
          className={styles["change-color-btn"]}
          onClick={() => decrease("red")}
        >
          Decrease Red
        </button>
      </div>
      <div className={styles["color-item"]}>
        <p className={styles.text}>Green</p>
        <button
          className={styles["change-color-btn"]}
          onClick={() => increase("green")}
        >
          Increase Green
        </button>
        <button
          className={styles["change-color-btn"]}
          onClick={() => decrease("green")}
        >
          Decrease Green
        </button>
      </div>
      <div className={styles["color-item"]}>
        <p className={styles.text}>Blue</p>
        <button
          className={styles["change-color-btn"]}
          onClick={() => increase("blue")}
        >
          Increase Blue
        </button>
        <button
          className={styles["change-color-btn"]}
          onClick={() => decrease("blue")}
        >
          Decrease Blue
        </button>
      </div>
    </>
  );
};

export default AdjustColor;
