import type { FC, ReactNode } from "react";
import Menu from "../components/Menu/Menu";
import Container from "../shared/ui/Container/Container";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Container>{children}</Container>
      <Menu />
    </>
  );
};

export default MainLayout;
