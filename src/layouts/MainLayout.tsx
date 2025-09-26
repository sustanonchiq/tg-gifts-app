import { useEffect, type FC, type ReactNode } from "react";
import Menu from "../components/Menu/Menu";
import Container from "../shared/ui/Container/Container";
import Header from "../components/Header/Header";
import { useTonAddress } from "@tonconnect/ui-react";
import { getTonBalance } from "../shared/utils/getTonBalance";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const wallet = useTonAddress();

  useEffect(() => {
    if (wallet) {
      (async () => {
        await getTonBalance(wallet).then((balance) => {
          console.log(`Баланс: ${balance} TON`);
        });
      })();
    }
  }, [wallet]);

  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Menu />
    </>
  );
};

export default MainLayout;
