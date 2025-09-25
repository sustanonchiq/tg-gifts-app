import type { FC } from "react";
import styles from "./Menu.module.scss";
import MenuItem from "../MenuItem/MenuItem";
import { ArrowBigUpDash, CircleUser, LayoutGrid, Users } from "lucide-react";

interface MenuProps {}

const Menu: FC<MenuProps> = () => {
  return (
    <nav className={styles.menu}>
      <MenuItem to="/" label="Home">
        <LayoutGrid width={48} height={48} stroke="white" />
      </MenuItem>
      <MenuItem to="/upgrade" label="Upgrade">
        <ArrowBigUpDash width={48} height={48} stroke="white" />
      </MenuItem>
      <MenuItem to="/friends" label="Friends">
        <Users width={48} height={48} stroke="white" />
      </MenuItem>
      <MenuItem to="/me" label="Profile">
        <CircleUser width={48} height={48} stroke="white" />
      </MenuItem>
    </nav>
  );
};

export default Menu;
