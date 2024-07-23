import React, { useEffect, useState } from "react";
import styles from "../styles/ProgressLine.module.css";

const ProgressLine = ({
  label,
  backgroundColor = "#e5e5e5",
  visualParts = [
    {
      percentage: "0%",
      color: "white"
    }
  ]
}) => {
  const [widths, setWidths] = useState(
    visualParts.map(() => {
      return 0;
    })
  );

  useEffect(() => {
    requestAnimationFrame(() => {
      setWidths(
        visualParts.map(item => {
          return item.percentage;
        })
      );
    });
  }, [visualParts]);

  return (
    <>
      <div className={styles.progressLabel}>{label}</div>
      <div
        className={styles.progressVisualFull}
        style={{
          backgroundColor
        }}
      >
        {visualParts.map((item, index) => (
          <div
            key={index}
            style={{
              width: widths[index],
              backgroundColor: item.color
            }}
            className={styles.progressVisualPart}
          />
        ))}
      </div>
    </>
  );
};

export default ProgressLine;
