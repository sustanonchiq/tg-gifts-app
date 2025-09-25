import type { FC } from "react";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
  return (
    <>
      <Header />
      <Menu />
    </>
  );
};

export default HomePage;
