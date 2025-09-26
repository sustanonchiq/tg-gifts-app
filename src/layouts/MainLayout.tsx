import { type FC, type ReactNode } from "react";
import Menu from "../components/Menu/Menu";
import Container from "../shared/ui/Container/Container";
import Header from "../components/Header/Header";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Menu />
    </>
  );
};

export default MainLayout;
