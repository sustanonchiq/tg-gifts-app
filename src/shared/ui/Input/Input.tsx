import type { FC } from "react";

import styles from "./Input.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      className={`${styles.input} ${className ? className : ""}`}
      {...props}
    />
  );
};

export default Input;
