import { type FC, type ReactNode } from "react";
import styles from "./MenuItem.module.scss";
import Button from "../../shared/ui/Button/Button";
import { useNavigate } from "react-router-dom";

interface MenuItemProps {
  to: string;
  children: ReactNode;
  label: string;
}

const MenuItem: FC<MenuItemProps> = ({ to, children, label }) => {
  const navigate = useNavigate();

  return (
    <span className={styles.wrapper}>
      <Button onClick={() => navigate(to)}>{children}</Button>
      {label}
    </span>
  );
};

export default MenuItem;
