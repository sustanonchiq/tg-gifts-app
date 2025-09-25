import type { FC } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/Home/Home";
import UpgradePage from "../../pages/Upgrade/Upgrade";
import FriendsPage from "../../pages/Friends/Friends";
import ProfilePage from "../../pages/Profile/Profile";

interface RouterProps {}

const Router: FC<RouterProps> = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/upgrade" element={<UpgradePage />} />
      <Route path="/friends" element={<FriendsPage />} />
      <Route path="/me" element={<ProfilePage />} />
    </Routes>
  );
};

export default Router;
