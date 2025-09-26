import { useEffect, type FC, type ReactNode } from "react";
import Menu from "../components/Menu/Menu";
import Container from "../shared/ui/Container/Container";
import Header from "../components/Header/Header";
import { useTonWallet } from "@tonconnect/ui-react";
import { getTonBalance } from "../shared/utils/getTonBalance";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const wallet = useTonWallet();

  useEffect(() => {
    (async () => {
      await getTonBalance(wallet?.account.address as string).then((balance) => {
        console.log(`Баланс: ${balance} TON`);
      });
    })();
  }, [wallet?.account.address]);

  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Menu />
    </>
  );
};

export default MainLayout;
