import styles from "./Color.module.css";

const Color: React.FC<{ listOfColors: string[] }> = ({ listOfColors }) => {
  return (
    <div className={styles["color-container"]}>
      {listOfColors.map((color) => {
        return (
          <div className={styles["color-item"]} key={Math.random().toString()}>
            <div
              className={styles["color-squar"]}
              style={{ backgroundColor: color }}
            ></div>
            <p className={styles["color-info"]}>{color}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Color;
