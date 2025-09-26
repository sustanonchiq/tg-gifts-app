import type { FC } from "react";

import styles from "./ConnectWalletButton.module.scss";
import { useTonConnectUI, useTonWallet } from "@tonconnect/ui-react";
import Button from "../Button/Button";

interface ConnectWalletButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ConnectWalletButton: FC<ConnectWalletButtonProps> = ({
  className,
  ...props
}) => {
  const [tonConnectUI] = useTonConnectUI();

  const wallet = useTonWallet();

  return (
    wallet?.account.address || (
      <Button
        {...props}
        className={`${className} ${styles["connect-btn"]}`}
        onClick={() => tonConnectUI.openModal()}
      >
        Connect wallet
      </Button>
    )
  );
};

export default ConnectWalletButton;
