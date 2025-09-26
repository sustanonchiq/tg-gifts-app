import type { FC } from "react";
import styles from "./Header.module.scss";
import ConnectWalletButton from "../../shared/ui/ConnectWalletButton/ConnectWalletButton";
import { useUser } from "../../providers/UserProvider";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const { first_name, last_name, balance, photo_url } = useUser();

  return (
    <header className={styles.header}>
      <div className={styles.profile}>
        <img className={styles.avatar} src={photo_url} alt="" />
        <h3 className={styles.username}>
          {first_name} {last_name}
        </h3>
      </div>
      <a href="/profile" className={styles.balance}>
        {balance}
        {/* <Icon
          tokenName={TokenName.TON}
          sx={{
            width: "45px",
            height: "45px",
          }}
        /> */}
      </a>
      <ConnectWalletButton />
    </header>
  );
};

export default Header;
