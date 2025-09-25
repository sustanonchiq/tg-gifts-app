import type { FC } from "react";

import styles from "./FortuneWheel.module.scss";

interface FortuneWheelProps {}

const FortuneWheel: FC<FortuneWheelProps> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 100 99"
    >
      <defs>
        <radialGradient
          id="_Безымянный_градиент_126"
          data-name="Безымянный градиент 126"
          cx="50"
          cy="49.01"
          fx="50"
          fy="49.01"
          r="47.99"
          gradientTransform="translate(0 .98) scale(1 .99)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".09" stop-color="#b5548e" stop-opacity=".2" />
          <stop offset=".32" stop-color="#962fa3" stop-opacity=".42" />
          <stop offset=".57" stop-color="#790db7" stop-opacity=".62" />
          <stop offset=".69" stop-color="#6e00bf" stop-opacity=".7" />
          <stop offset=".96" stop-color="#ff5e84" stop-opacity=".2" />
        </radialGradient>
      </defs>
      <g id="_Слой_1" data-name="Слой 1">
        <g>
          <ellipse
            className={styles["cls-2"]}
            cx="50"
            cy="49.5"
            rx="48"
            ry="47.5"
          />
          <path
            className={styles["cls-1"]}
            d="m50,4c25.36,0,46,20.41,46,45.5s-20.64,45.5-46,45.5S4,74.59,4,49.5,24.64,4,50,4m0-4C22.39,0,0,22.16,0,49.5s22.39,49.5,50,49.5,50-22.16,50-49.5S77.61,0,50,0h0Z"
          />
        </g>
      </g>
      <g id="_Слой_2" data-name="Слой 2">
        <path
          className={styles["cls-3"]}
          d="m49.57,92.41l-7.61-15.23c-.46-.93.08-2.12.98.32h14.23c.89-2.44,1.44-1.25.98-.32l-7.61,15.23c-.22.43-.73.43-.95,0Z"
        />
      </g>
    </svg>
  );
};

export default FortuneWheel;
