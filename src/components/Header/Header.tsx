import type { FC } from "react";
import styles from "./Header.module.scss";
import ConnectWalletButton from "../../shared/ui/ConnectWalletButton/ConnectWalletButton";
//import { useTonWallet } from "@tonconnect/ui-react";
import { getTonBalance } from "../../shared/utils/getTonBalance";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  // const wallet = useTonWallet();

  getTonBalance("UQD0TDc5sHt0Rx9XNSC26JUipxc6TttThkjRMDDlNLvxTALR").then(
    (balance) => {
      console.log(`Баланс: ${balance} TON`);
    }
  );

  return (
    <header className={styles.header}>
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://naked-science.ru/wp-content/uploads/2018/10/field_image_1505196713_1471532829_1.jpg"
          alt=""
        />
        <h3 className={styles.username}>sustanonchiq</h3>
      </div>
      <a href="/profile" className={styles.balance}>
        0.00
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
